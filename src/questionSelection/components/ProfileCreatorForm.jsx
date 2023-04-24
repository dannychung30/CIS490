const ProfileCreatorForm = ({ data, setEmail, setFirstName, setLastName }) => {
  return (
    <div className='profile-creator'>
      <div className='form-control'>
        <label htmlFor='email'>Email</label>
        <select
          onChange={(e) => setEmail(e.target.value)}
          name='email'
          id='email'
        >
          {data.map((q) => (
            <option key={q.id} value={q.id}>
              {q.text}
            </option>
          ))}
        </select>
      </div>
      <div className='form-control'>
        <label htmlFor='first-name'>First Name</label>
        <select
          onChange={(e) => setFirstName(e.target.value)}
          name='first-name'
          id='first-name'
        >
          {data.map((q) => (
            <option key={q.id} value={q.id}>
              {q.text}
            </option>
          ))}
        </select>
      </div>
      <div className='form-control'>
        <label htmlFor='last-name'>Last Name</label>
        <select
          onChange={(e) => setLastName(e.target.value)}
          name='last-name'
          id='last-name'
        >
          {data.map((q) => (
            <option key={q.id} value={q.id}>
              {q.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProfileCreatorForm;
