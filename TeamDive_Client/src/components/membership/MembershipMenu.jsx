import { Link } from 'react-router-dom';
import membershipStyle from '../../css/membership.module.css';

const MembershipMenu = () => {
    return (
        <div className={membershipStyle.menu}>
            <Link to='/allMembership' className={membershipStyle.link} />전체 멤버십
            <Link to='/giftMembership' className={membershipStyle.link} />선물 이용권
        </div>
    )
}

export default MembershipMenu;
