import React, {useState} from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerComponent.css"

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(null);

  return (
      <DatePicker
        className="input-datepicker" //클래스 명 지정
        dateFormat="yyyy-MM-dd" //날짜 형식 설정
        closeOnScroll={true} //스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
        locale={ko} //언어설정 기본값 영어
        selected={startDate} //value
        minDate={new Date()} //선책할 수 있는 최소 날짜값 지정
        onChange={date => setStartDate(date)} //날짜를 선책하였을 때 실행될 함수
        isClearable
        disabledKeyboardNavigation
        placeholderText="날짜를 입력하세요."
      />
  );
}

export default DatePickerComponent;