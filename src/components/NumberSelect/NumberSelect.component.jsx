import { Select } from 'antd';
import "./NumberSelect.styles.css";

const { Option } = Select;

const NumberSelect = ({formData, setFormData}) => {

    const handleChange = (value) => {
        setFormData({...formData, bed: value});
    }

    return (
        <div className="d-flex mt-4 mb-3 justify-content-start align-items-center pe-0">
            <div className="w-100">
                <Select placeholder="Number of bed" style={{ width: "100%", display: "flex" }} onChange={handleChange}>
                    <Option value={0}>0</Option>
                    <Option value={1}>1</Option>
                    <Option value={2}>2</Option>
                    <Option value={3}>3</Option>
                    <Option value={4}>4</Option>
                    <Option value={5}>5</Option>
                    <Option value={""}>All</Option>
                </Select>
            </div>
        </div>
    )
}


export default NumberSelect;