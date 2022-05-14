import { useSelector } from "react-redux";
import moment from "moment";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useEffect, useState } from "react";
import { getAccountBalance, getPayoutSetting } from "../../actions/stripe.action";
import { LoadingOutlined, SettingOutlined } from "@ant-design/icons";

import "./StripeConnect.styles.css";

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
        <div className="container-fluid py-3">
            <div className="row gap-5">
                <div className="col d-flex justify-content-center align-items-center">
                    <div className="stripe-card d-flex">
                        <div className="stripe-card-user-avatar d-flex justify-content-center align-items-center pe-3">
                            <div className="stripe-card-user-avatar-content d-flex justify-content-center align-items-center">
                                {user.name[0]}                                
                            </div>

                        </div>
                        <div className="stripe-card-user-info d-flex flex-column justify-content-center">
                            <p className="stripe-card-user-info-name d-flex ">{user.name}</p>
                            <p className="stripe-card-user-info-description d-flex">{`Johned ${moment(user.createdAt).fromNow()}`}</p>
                        </div>
                    </div>
                </div>
                
                {auth && 
                    auth.user && 
                    auth.user.stripe_seller && 
                    auth.user.stripe_seller.charges_enabled && 
                    (isLoading
                        ? 
                        <>
                            <div className="col d-flex justify-content-center align-items-center">
                                <LoadingOutlined className="h1 text-white" />
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                                <LoadingOutlined className="h1 text-white" />
                            </div>
                        </>
                        :
                        <>
                            <div className="col d-flex justify-content-center align-items-center">
                                <div className="stripe-card d-flex flex-column justify-content-center align-items-center">
                                    <p className="stripe-card-balance-number d-flex">{`${balance} ${activeCurrency}`}</p>
                                    <p className="stripe-card-balance-description d-flex">{`account type: ${accountTypes}`}</p>
                                </div>

                            </div>
                            <div className="col d-flex flex-column justify-content-center align-items-center">
                                {isPayoutLoading 
                                    ? 
                                    <LoadingOutlined className="h1 text-white" /> 
                                    : 
                                    <div className="stripe-card d-flex justify-content-center align-items-center">
                                        <div onClick={payoutSetting} className="d-flex flex-column justify-content-center align-items-center payout-setting-icon">
                                            <SettingOutlined className="h2 text-white" />
                                            <h6 className="text-white m-0">Payout Setting</h6>
                                        </div>                                        
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