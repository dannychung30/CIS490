import { findBestMatch } from 'string-similarity';

const ProfileCreatorForm = ({
  type,
  data,
  setEmail,
  setFirstName,
  setLastName,
}) => {
  return (
    <div className='profile-creator'>
      <div className='form-control'>
        <label htmlFor={type + '-email'}>Email</label>
        <select
          onChange={(e) => setEmail(e.target.value)}
          name={type + '-email'}
          id={type + '-email'}
        >
          {data.map((q) => (
            <option key={q.id} value={q.id}>
              {q.text}
            </option>
          ))}
        </select>
      </div>
      <div className='form-control'>
        <label htmlFor={type + '-first-name'}>First Name</label>
        <select
          onChange={(e) => setFirstName(e.target.value)}
          name={type + '-first-name'}
          id={type + '-first-name'}
        >
          {data.map((q) => (
            <option key={q.id} value={q.id}>
              {q.text}
            </option>
          ))}
        </select>
      </div>
      <div className='form-control'>
        <label htmlFor={type + '-last-name'}>Last Name</label>
        <select
          onChange={(e) => setLastName(e.target.value)}
          name={type + '-last-name'}
          id={type + '-last-name'}
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
