import { useSelector } from "react-redux";
import { Card, Avatar } from "antd";
import moment from "moment";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useEffect, useState } from "react";
import { getAccountBalance, getPayoutSetting } from "../../actions/stripe.action";
import { LoadingOutlined, SettingOutlined } from "@ant-design/icons";

import "./StripeConnect.styles.css";

const { Meta } = Card;


const StripeConnect = () => {
    const auth = useSelector(selectCurrentUser);
    const { user, token } = auth;

    const [isLoading, setIsLoading] = useState(true);
    const [isPayoutLoading, setIsPayoutLoading] = useState(false);
    const [balance, setBalance] = useState("");
    const [activeCurrency, setActiveCurrency] = useState("");
    const [accountTypes, setAccountTypes] = useState("");

    const accountBalance = async (token) => {
        const response = await getAccountBalance(token);
        const { amount, currency, source_types } = response.data[0];
        setBalance(amount/100);
        setActiveCurrency(currency.toUpperCase());
        setAccountTypes(Object.keys(source_types));
        setIsLoading(false);   
    }

    const payoutSetting = async () => {
        setIsPayoutLoading(true);
        const response = await getPayoutSetting(token);
        window.open(response.data.url, '_blank');
        setIsPayoutLoading(false);
        // window.location.href = response.data.url;
    }

    useEffect(() => {
        accountBalance(token);
    }, [token])

    return (
        <div className="container-fluid">
            <div className="row gap-5">
                <div className="col d-flex justify-content-center align-items-center">
                    <Card>
                        <Meta avatar={<Avatar>{user.name[0]}</Avatar>} title={user.name} description={`Johned ${moment(user.createdAt).fromNow()}`} />
                    </Card>
                </div>
                
                {auth && 
                    auth.user && 
                    auth.user.stripe_seller && 
                    auth.user.stripe_seller.charges_enabled && 
                    (isLoading
                        ? 
                        <>
                            <div className="col d-flex justify-content-center align-items-center">
                                <LoadingOutlined className="h1" />
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                                <LoadingOutlined className="h1" />
                            </div>
                        </>
                        :
                        <>
                            <div className="col d-flex justify-content-center align-items-center">
                                <Card>
                                    <Meta title={`${balance} ${activeCurrency}`} description={`account type: ${accountTypes}`} />
                                </Card>
                            </div>
                            <div className="col d-flex flex-column justify-content-center align-items-center pt-3">
                                {isPayoutLoading 
                                    ? 
                                    <LoadingOutlined className="h1" /> 
                                    : 
                                    <div onClick={payoutSetting} className="d-flex flex-column justify-content-center align-items-center payout-setting-icon">
                                        <SettingOutlined className="h1" />
                                        <h6>Payout Setting</h6>
                                    </div>
                                }
                            </div>
                        </>
                    )
                }
            </div>
            
            
        </div>
    )
};

export default StripeConnect;