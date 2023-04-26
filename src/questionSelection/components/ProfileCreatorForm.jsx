const ProfileCreatorForm = ({ type, data, setEmail, setFullName }) => {
  const options = data.map((q) => (
    <option key={q.id} value={q.id}>
      {q.text}
    </option>
  ));

  return (
    <div className='profile-creator'>
      <div className='form-control'>
        <label htmlFor={type + '-email'}>Email</label>
        <select
          onChange={(e) => setEmail(e.target.value)}
          name={type + '-email'}
          id={type + '-email'}
        >
          {options}
        </select>
      </div>
      <div className='form-control'>
        <label htmlFor={type + '-full-name'}>Full Name</label>
        <select
          onChange={(e) => setFullName(e.target.value)}
          name={type + '-full-name'}
          id={type + '-full-name'}
        >
          {options}
        </select>
      </div>
    </div>
  );
};

export default ProfileCreatorForm;
