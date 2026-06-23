import React, { useState, useEffect, useRef } from 'react';
import { db, storage } from '../../firebase';
import { collection, query, where, getDocs, setDoc, doc, onSnapshot } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {
    Upload, Link as LinkIcon, Loader2,
    Lightbulb, Rocket, Settings, Cpu, FileJson, FlaskConical, Factory, Activity,
    Code, BarChart3, Palette, Globe, Construction, Zap, ShieldCheck, RefreshCw,
    PenTool, Box, Cog, CheckCircle, Layers, Monitor, FileCode, Printer, Rotate3d,
    Wind, Thermometer, TrendingUp, BarChart2, Shield, FileText, Image, Grid,
    Brain, Bot, LineChart, Search, Share2, Mail, ShoppingCart, Eye, Users,
    Smartphone, Layout, Server, Database, Briefcase, GraduationCap
} from 'lucide-react';



// Cache to prevent multiple fetches
const contentCache = {};

export const useContent = (key, defaultValue) => {
    const [content, setContent] = useState(contentCache[key] || defaultValue);

    useEffect(() => {
        if (contentCache[key]) {
            setContent(contentCache[key]);
            return;
        }

        const fetchContent = async () => {
            const q = query(collection(db, 'site_content'), where('key', '==', key));
            const snap = await getDocs(q);

            if (!snap.empty) {
                const val = snap.docs[0].data().value;
                contentCache[key] = val;
                setContent(val);
            } else {
                setContent(defaultValue);
            }
        };

        fetchContent();

        // Real-time subscription via Firestore onSnapshot
        const q = query(collection(db, 'site_content'), where('key', '==', key));
        const unsubscribe = onSnapshot(q, (snap) => {
            if (!snap.empty) {
                const val = snap.docs[0].data().value;
                contentCache[key] = val;
                setContent(val);
            }
        });

        return () => {
            unsubscribe();
        };
    }, [key]);

    return content;
};

export const DynamicText = ({ id, defaultText, className = "" }) => {
    const text = useContent(id, defaultText);
    return <span className={className} dangerouslySetInnerHTML={{ __html: text }} />;
};

export const EditableText = ({ id, defaultText, className = "", onSave = null }) => {
    const [text, setText] = useState(defaultText);
    const [isEditing, setIsEditing] = useState(false);

    // Only fetch if we are using the default site_content behavior
    useEffect(() => {
        if (!onSave) {
            const fetch = async () => {
                const q = query(collection(db, 'site_content'), where('key', '==', id));
                const snap = await getDocs(q);
                if (!snap.empty) setText(snap.docs[0].data().value);
            };
            fetch();
        } else {
            // For custom data sources, we rely on defaultText being the initial value passed in props
            setText(defaultText);
        }
    }, [id, defaultText, onSave]);

    const handleBlur = async (e) => {
        setIsEditing(false);
        const newValue = e.target.innerText; // Use innerText to grab content
        if (newValue === text) return;

        setText(newValue);

        if (onSave) {
            await onSave(newValue);
        } else {
            // Default behavior: Save to site_content
            contentCache[id] = newValue; // Optimistic update
            await setDoc(doc(db, 'site_content', id), { key: id, value: newValue }, { merge: true });
        }
    };

    return (
        <span
            contentEditable
            suppressContentEditableWarning
            onBlur={handleBlur}
            onFocus={() => setIsEditing(true)}
            onClick={(e) => {
                if (id) e.stopPropagation(); // Prevent navigation if inside a Link
            }}
            className={`${className} ${isEditing ? 'outline-none ring-2 ring-blue-500/50 rounded px-1 -mx-1 bg-white/5' : 'hover:outline-dashed hover:outline-1 hover:outline-white/30 cursor-text'}`}
            dangerouslySetInnerHTML={{ __html: text }}
            style={{ minWidth: '1ch', display: 'inline-block' }}
        />
    );
};

export const CMSText = ({ id, defaultText, className = "", editable = false }) => {
    if (editable) {
        return <EditableText id={id} defaultText={defaultText} className={className} />;
    }
    return <DynamicText id={id} defaultText={defaultText} className={className} />;
};

// Helper for file uploads
const uploadFile = async (file, bucket = 'media') => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    console.log(`Attempting to upload ${filePath} to Firebase Storage...`);

    const storageRef = ref(storage, filePath);
    await uploadBytes(storageRef, file);
    const publicUrl = await getDownloadURL(storageRef);

    return publicUrl;
};

export const ImageEditable = ({ id, defaultSrc, alt, className = "" }) => {
    const src = useContent(id, defaultSrc);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef(null);
    const isVideo = src && (src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg') || src.endsWith('.mov'));

    const handleUrlEdit = () => {
        const newSrc = prompt("Enter new Media URL (Image or Video):", src);
        if (newSrc && newSrc !== src) {
            updateContent(newSrc);
        }
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setIsUploading(true);
        try {
            const publicUrl = await uploadFile(file);
            await updateContent(publicUrl);
        } catch (error) {
            console.error('Upload failed:', error);
            alert(`Upload failed: ${error.message || JSON.stringify(error)} \n\nPlease ensure you have a public storage bucket named 'media'.`);
        } finally {
            setIsUploading(false);
        }
    };

    const updateContent = async (newValue) => {
        contentCache[id] = newValue; // Optimistic
        await setDoc(doc(db, 'site_content', id), { key: id, value: newValue }, { merge: true });
    };


    return (
        <div className={`relative group ${className}`}>
            {isVideo ? (
                <video
                    key={`${id}-${src || 'none'}`}
                    src={src}
                    className="w-full h-full object-cover pointer-events-none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    disablePictureInPicture
                    disableRemotePlayback
                    onError={(e) => {
                        if (src !== defaultSrc) {
                            console.log(`Video load error for ${id}, falling back...`);
                            e.target.src = defaultSrc;
                        }
                    }}
                />
            ) : (
                <img
                    key={`${id}-${src || 'none'}`}
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        if (src !== defaultSrc) {
                            console.log(`Image load error for ${id}, falling back...`);
                            e.target.src = defaultSrc;
                        }
                    }}
                />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-50 p-4 flex items-end justify-end pointer-events-none">
                <div className="flex gap-2 pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0">
                    {isUploading ? (
                        <div className="bg-black/50 p-2 rounded-full backdrop-blur-md">
                            <Loader2 className="animate-spin text-white w-5 h-5" />
                        </div>
                    ) : (
                        <>
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg shadow-lg transition-transform hover:scale-105 flex items-center justify-center"
                                title="Upload Media"
                            >
                                <Upload size={18} />
                            </button>
                            <button
                                onClick={handleUrlEdit}
                                className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg shadow-lg border border-white/10 transition-transform hover:scale-105 flex items-center justify-center backdrop-blur-md"
                                title="Enter Media URL"
                            >
                                <LinkIcon size={18} />
                            </button>
                        </>
                    )}
                </div>
            </div>

            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept="image/*,video/*"
                className="hidden"
            />
        </div>
    );
};

export const CMSImage = ({ id, defaultSrc, alt, className = "", editable = false }) => {
    if (editable) {
        return <ImageEditable id={id} defaultSrc={defaultSrc} alt={alt} className={className} />;
    }
    const src = useContent(id, defaultSrc);
    const isVideo = src && (src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg') || src.endsWith('.mov'));

    if (isVideo) {
        return (
            <video
                key={`${id}-${src || 'none'}`}
                src={src}
                className={className}
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                disableRemotePlayback
                onError={(e) => {
                    if (src !== defaultSrc) e.target.src = defaultSrc;
                }}
            />
        );
    }
    return (
        <img
            key={`${id}-${src || 'none'}`}
            src={src}
            alt={alt}
            className={className}
            onError={(e) => {
                if (src !== defaultSrc) e.target.src = defaultSrc;
            }}
        />
    );
};

export const VideoEditable = ({ id, defaultSrc, className = "", poster = "" }) => {
    const src = useContent(id, defaultSrc);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef(null);

    const handleUrlEdit = () => {
        const newSrc = prompt("Enter new video URL:", src);
        if (newSrc && newSrc !== src) {
            updateContent(newSrc);
        }
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setIsUploading(true);
        try {
            const publicUrl = await uploadFile(file);
            await updateContent(publicUrl);
        } catch (error) {
            console.error('Upload failed:', error);
            alert(`Upload failed: ${error.message || JSON.stringify(error)} \n\nPlease ensure you have a public storage bucket named 'media'.`);
        } finally {
            setIsUploading(false);
        }
    };

    const updateContent = async (newValue) => {
        contentCache[id] = newValue; // Optimistic
        await setDoc(doc(db, 'site_content', id), { key: id, value: newValue }, { merge: true });
    };

    return (
        <div className={`relative group ${className}`}>
            <video
                key={`${id}-${src || 'none'}`}
                className="w-full h-full object-cover pointer-events-none"
                poster={poster}
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                disableRemotePlayback
                src={src}
                onError={(e) => {
                    console.log(`Video load error for ${id}, falling back to default...`);
                    if (src !== defaultSrc) {
                        e.target.src = defaultSrc;
                    }
                }}
            >
                {src && <source src={src} type="video/mp4" />}
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity z-50 p-4">
                {isUploading ? (
                    <div className="flex flex-col items-center gap-2">
                        <Loader2 className="animate-spin text-white w-8 h-8" />
                        <span className="text-white text-xs font-bold uppercase">Uploading...</span>
                    </div>
                ) : (
                    <>
                        <button
                            onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 shadow-lg"
                        >
                            <Upload size={16} />
                            <span className="text-xs font-bold uppercase">Upload Video</span>
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); handleUrlEdit(); }}
                            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 border border-white/10"
                        >
                            <LinkIcon size={16} />
                            <span className="text-xs font-bold uppercase">URL</span>
                        </button>
                    </>
                )}
            </div>

            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept="video/*"
                className="hidden"
            />
        </div>
    );
};

export const CMSVideo = ({ id, defaultSrc, className = "", poster = "", editable = false }) => {
    if (editable) {
        return <VideoEditable id={id} defaultSrc={defaultSrc} className={className} poster={poster} />;
    }
    const src = useContent(id, defaultSrc);
    return (
        <video
            key={`${id}-${src || 'none'}`}
            className={className}
            poster={poster}
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            disableRemotePlayback
            src={src}
            onError={(e) => {
                console.log(`Video load error for ${id}, falling back to default...`);
                if (src !== defaultSrc) {
                    e.target.src = defaultSrc;
                }
            }}
        >
            {src && <source src={src} type="video/mp4" />}
            Your browser does not support the video tag.
        </video>
    );
};
// Icon Mapping

export const IconMap = {
    Lightbulb, Rocket, Settings, Cpu, FileJson, FlaskConical, Factory, Activity,
    Code, BarChart3, Palette, Globe, Construction, Zap, ShieldCheck, RefreshCw,
    PenTool, Box, Cog, CheckCircle, Layers, Monitor, FileCode, Printer, Rotate3d,
    Wind, Thermometer, TrendingUp, BarChart2, Shield, FileText, Image, Grid,
    Brain, Bot, LineChart, Search, Share2, Mail, ShoppingCart, Eye, Users,
    Smartphone, Layout, Server, Database, Briefcase, GraduationCap
};

export const CMSIcon = ({ id, defaultIcon, className = "", editable = false, ...props }) => {
    const iconName = useContent(id, defaultIcon);
    const IconComponent = IconMap[iconName] || IconMap[defaultIcon] || Settings;

    const handleEdit = (e) => {
        if (!editable) return;
        e.preventDefault();
        e.stopPropagation();

        const newIconName = prompt(
            `Enter new Icon Name:\n(Available: ${Object.keys(IconMap).slice(0, 10).join(', ')}...)`,
            iconName
        );

        if (newIconName && IconMap[newIconName]) {
            // Optimistic update
            contentCache[id] = newIconName;

            // Save to Firestore
            setDoc(doc(db, 'site_content', id), { key: id, value: newIconName }, { merge: true })
                .then(() => { })
                .catch((error) => {
                    if (error) {
                        console.error('Error saving icon:', error);
                        alert("Failed to save. Check console.");
                    }
                });
        } else if (newIconName) {
            alert("Invalid Icon Name. Please check the list of standard Lucide icons.");
        }
    };

    return (
        <div
            className={`relative inline-flex ${editable ? 'cursor-pointer hover:opacity-80' : ''}`}
            onClick={handleEdit}
            title={editable ? `Click to change icon (Current: ${iconName})` : ""}
        >
            <IconComponent className={className} {...props} />
            {editable && (
                <div className="absolute -top-2 -right-2 bg-blue-600 rounded-full p-1 opacity-0 hover:opacity-100 transition-opacity">
                    <Settings color="white" size={10} />
                </div>
            )}
        </div>
    );
};
