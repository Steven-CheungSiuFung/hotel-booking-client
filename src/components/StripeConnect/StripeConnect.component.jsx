import { useSelector } from "react-redux";
import { Card, Avatar } from "antd";
import moment from "moment";
import { selectCurrentUser } from "../../store/user/user.selector";

const { Meta } = Card;


const StripeConnect = () => {
    const auth = useSelector(selectCurrentUser);
    const { user } = auth;
    console.log(user);

    return (
        <div className="d-flex justify-content-around">
            <Card>
                <Meta avatar={<Avatar>{user.name[0]}</Avatar>} title={user.name} description={`Johned ${moment(user.createdAt).fromNow()}`} />
            </Card>
            {auth && 
                auth.user && 
                auth.user.stripe_seller && 
                auth.user.stripe_seller.charges_enabled && 
                (<>
                    <div>Pending balance</div>
                    <div>Payout setting</div>
                </>)
            }
            
        </div>
    )
};

export default StripeConnect;