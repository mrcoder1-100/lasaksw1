// src/pages/admin/index.jsx
import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import AdminUserModal from '../../components/admin/AdminUserModal';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

const AdminPage = () => {
  const [admins, setAdmins] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState(null);

  // Load admin users from Firestore
  const fetchAdmins = async () => {
    const querySnapshot = await getDocs(collection(db, 'admin_users'));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setAdmins(data);
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  const handleEdit = (admin) => {
    setEditingAdmin(admin);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    fetchAdmins(); // refresh after add/edit
  };

  return (
    <AdminLayout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        <button
          className="bg-blue-600 text-white py-2 px-4 rounded-xl mb-6"
          onClick={() => {
            setEditingAdmin(null);
            setIsModalOpen(true);
          }}
        >
          Add New Admin
        </button>

        {/* Admin Users Table */}
        <div className="bg-[#1e293b] rounded-xl overflow-hidden">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-[#111827]">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Role</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {admins.map(admin => (
                <tr key={admin.id}>
                  <td className="px-6 py-4 text-sm">{admin.email}</td>
                  <td className="px-6 py-4 text-sm">{admin.role}</td>
                  <td className="px-6 py-4 text-sm flex gap-2">
                    <button
                      className="bg-yellow-500 px-2 py-1 rounded"
                      onClick={() => handleEdit(admin)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        <AdminUserModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
          editingAdmin={editingAdmin}
        />
      </div>
    </AdminLayout>
  );
};

export default AdminPage;