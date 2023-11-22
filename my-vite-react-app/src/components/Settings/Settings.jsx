import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog,faChevronDown,faChevronRight,} from '@fortawesome/free-solid-svg-icons';


function Settings() {
    const [showProfileInputs, setShowProfileInputs] = useState(false);
    const [showNotificationInputs, setShowNotificationInputs] = useState(false);
    const [showSecurityInputs, setShowSecurityInputs] = useState(false);
    const [showPrivacyInputs, setShowPrivacyInputs] = useState(false);
    const [profileData, setProfileData] = useState({
        username: 'JohnDoe',
        fullName: 'John Doe',
        email: 'johndoe@example.com',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        location: 'New York, USA',
    });

    const handleSave = () => {
        // Add logic to save settings
        console.log('Settings saved!', profileData);
    };

    const toggleProfileInputs = () => {
        setShowProfileInputs(!showProfileInputs);
    };
    const toggleNotificationInputs = () => {
        setShowNotificationInputs(!showNotificationInputs);
    };
    const toggleSecurityInputs = () => {
        setShowSecurityInputs(!showSecurityInputs);
    };

    const togglePrivacyInputs = () => {
        setShowPrivacyInputs(!showPrivacyInputs);
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md mb-96">
            
            
            <div className="flex items-center justify-between mb-8">
        {/* Settings Icon */}
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCog} className="text-2xl mr-3" />
          <h2 className="text-2xl font-semibold">Settings</h2>
        </div>
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Save All
        </button>
      </div>


            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 cursor-pointer" onClick={toggleProfileInputs}>
                    <span className="inline-block mr-2">▶</span> Edit Profile
                </h3>

                <h4
                    className="text-lg font-semibold mb-2 cursor-pointer"

                >
                    Personal Information
                </h4>

                {showProfileInputs && (
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-1">
                                Username
                            </label>
                            <input
                                type="text"
                                value={profileData.username}
                                onChange={(e) =>
                                    setProfileData({ ...profileData, username: e.target.value })
                                }
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                value={profileData.fullName}
                                onChange={(e) =>
                                    setProfileData({ ...profileData, fullName: e.target.value })
                                }
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                value={profileData.email}
                                onChange={(e) =>
                                    setProfileData({ ...profileData, email: e.target.value })
                                }
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-1">
                                Bio
                            </label>
                            <textarea
                                value={profileData.bio}
                                onChange={(e) =>
                                    setProfileData({ ...profileData, bio: e.target.value })
                                }
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-1">
                                Location
                            </label>
                            <input
                                type="text"
                                value={profileData.location}
                                onChange={(e) =>
                                    setProfileData({ ...profileData, location: e.target.value })
                                }
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={handleSave}
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
                        >
                            Save Profile
                        </button>
                    </form>
                )}
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 cursor-pointer" onClick={toggleNotificationInputs}>
                    <span className="inline-block mr-2">▶</span> Notification Settings
                </h3>

                {showNotificationInputs && (
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-1">
                                Email Notifications
                            </label>
                            <div>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 text-blue-500"
                                    // Add your logic for handling email notification state here
                                    />
                                    <span className="ml-2">Receive email notifications</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-1">
                                Push Notifications
                            </label>
                            <div>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 text-blue-500"
                                    // Add your logic for handling push notification state here
                                    />
                                    <span className="ml-2">Receive push notifications</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-1">
                                SMS Notifications
                            </label>
                            <div>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 text-blue-500"
                                    // Add your logic for handling SMS notification state here
                                    />
                                    <span className="ml-2">Receive SMS notifications</span>
                                </label>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={handleSave}
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
                        >
                            Save Notifications
                        </button>
                    </form>
                )}
            </div>
            <div className="mb-6">
        <div
          className="flex items-center cursor-pointer"
          onClick={toggleSecurityInputs}
        >
          <FontAwesomeIcon
            icon={showSecurityInputs ? faChevronDown : faChevronRight}
            className="mr-2 text-gray-600"
          />
          <h3 className="text-lg font-semibold">Security</h3>
        </div>

        {showSecurityInputs && (
          <form className="space-y-4 ml-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Change Password
              </label>
              <input
                type="password"
                placeholder="New Password"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Two-Factor Authentication
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="enabled">Enabled</option>
                <option value="disabled">Disabled</option>
              </select>
            </div>
          </form>
        )}
      </div>

      {/* Privacy Section */}
      <div className="mb-6">
        <div
          className="flex items-center cursor-pointer"
          onClick={togglePrivacyInputs}
        >
          <FontAwesomeIcon
            icon={showPrivacyInputs ? faChevronDown : faChevronRight}
            className="mr-2 text-gray-600"
          />
          <h3 className="text-lg font-semibold">Privacy</h3>
        </div>

        {showPrivacyInputs && (
          <form className="space-y-4 ml-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Data Sharing
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="enabled">Enabled</option>
                <option value="disabled">Disabled</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Third-Party Access
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="allowed">Allowed</option>
                <option value="blocked">Blocked</option>
              </select>
            </div>
          </form>
        )}
      </div>
        </div>


    );
}

export default Settings;
