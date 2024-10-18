import React from 'react';
import './ProfilePage.css';

interface Subscription {
  id: number;
  name: string;
  status: 'active' | 'expired';
  expiryDate?: string;
}

const ProfilePage: React.FC = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: 'January 15, 2023',
  };

  const subscriptions: Subscription[] = [
    { id: 1, name: 'Basic Plan', status: 'active', expiryDate: 'December 31, 2023' },
    { id: 2, name: 'Premium Plan', status: 'expired', expiryDate: 'March 1, 2023' },
  ];

  return (
    <div className="profile-page">
      <h1>User Profile</h1>
      <div className="user-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Member Since:</strong> {user.joinDate}</p>
      </div>
      <h2>Your Subscriptions</h2>
      <ul className="subscription-list">
        {subscriptions.map((sub) => (
          <li key={sub.id} className={`subscription ${sub.status}`}>
            <div>
              <span className="subscription-name">{sub.name}</span>
              <p>{sub.expiryDate ? `Expires: ${sub.expiryDate}` : 'Expired'}</p>
            </div>
            <span className="subscription-status">{sub.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePage;