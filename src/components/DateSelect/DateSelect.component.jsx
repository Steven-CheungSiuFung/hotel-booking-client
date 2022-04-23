import { DatePicker, Space } from 'antd';
import monent from "moment";

const DateSelect = ({formData, setFormData}) => {

    return (
        <div className="cotainer-fluid d-flex mt-4 mb-3 justify-content-start align-items-center px-2">
            <div className="cotainer-fluid d-flex justify-content-start align-items-center px-1">
                <p className="my-0">Available Date: </p>
            </div>
            <div className="mx-2">
                <Space direction="vertical">
                    <DatePicker 
                        placeholder="From"
                        onChange={(date, dateString) => setFormData({...formData, from: dateString})}
                        disabledDate={(current) => current && current.valueOf() < monent().subtract(1, "day")}
                    />
                </Space>
            </div>
            <div className="mx-2">
                <Space direction="vertical">
                    <DatePicker 
                        placeholder="To"
                        onChange={(date, dateString) => setFormData({...formData, to: dateString})} 
                        disabledDate={(current) => current && current.valueOf() < monent().subtract(1, "day")}
                    />
                </Space>
            </div>
        </div>
        
    )
}

export default DateSelect;