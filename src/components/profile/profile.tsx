import styles from '../../../styles/profile.module.css';
import { PhoneIphone, Email } from '@material-ui/icons'
import ProfileListItem from "./profileListItem/profileListItem";

export const Profile = () => (
  <div className={styles.profileWrapper}>
    <h1>Viktor Garba</h1>

    <ProfileListItem Icon={PhoneIphone} text={'+1 (813) 503 8363'} href={'tel:+18135038363'}/>

    <ProfileListItem Icon={Email} text={'viktorgarba@gmail.com'} href={'mailto:viktorgarba@gmail.com'}/>

    <ProfileListItem src={'/github-icon.svg'} text={'vgarba1'} href={'https://github.com/vgarba1'}/>

    <ProfileListItem src={'/linkedin-icon.svg'} text={'viktorgarba'} href={'https://www.linkedin.com/in/viktorgarba/'} />

  </div>
)

export default Profile;