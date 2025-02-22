import { Select } from '@mantine/core';
import { FC } from 'react';

// import { UserRoles } from '../../../../../constants/user';
import { User } from '../../../../../ts/types/user';

interface UserDrawerContentProps {
  user: N<User>;
}

const UserDrawerContent: FC<UserDrawerContentProps> = ({ user }) => {
  // const [role, setRole] = useState(user?.role);
  // const [plan, setPlan] = useState(user?.role);

  if (!user) return;

  return (
    <div>
      {/* <Select onChange={setRole} label="Роль" value={role} data={UserRoles} /> */}
      <Select
        // onChange={(e) => setPlan(e)}
        label="Тарифный план"
        // value={plan}
        data={['basic', 'stand']}
      />
    </div>
  );
};

export default UserDrawerContent;
