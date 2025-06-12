const UserCard = ({ user }) => {
  const skillsArray = user.skills ? user.skills.split(',').map(skill => skill.trim()) : [];
  
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
      {/* Header with Avatar and Name */}
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {user.fullName ? user.fullName.charAt(0).toUpperCase() : 'U'}
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-800">{user.fullName}</h3>
          <div className="flex items-center text-gray-600 text-sm mt-1">
            <Mail className="w-4 h-4 mr-1" />
            {user.email}
          </div>
        </div>
      </div>

      {/* Bio Section */}
      {user.bio && (
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <FileText className="w-4 h-4 mr-2 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">About</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{user.bio}</p>
        </div>
      )}

      {/* Skills Section */}
      {skillsArray.length > 0 && (
        <div>
          <div className="flex items-center mb-3">
            <Code className="w-4 h-4 mr-2 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Skills</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillsArray.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


export default UserCard