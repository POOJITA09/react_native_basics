// import React from "react";
// // import "./styles.css";
// import {View} from "react-native";
// import CalendarStrip from "react-native-calendar-strip";
// import moment from "moment";
// export default function Calendar() {
//   let datesWhitelist = [
//     {
//       start: moment(),
//       end: moment().add(30, "days")
//     }
//   ];
//   let markedDatesArray = [
//     {
//       date: "2021-09-21",
//       dots: [
//         {
//           color: "red",
//           selectedColor: "red"
//         }
//       ]
//     },
//     {
//       date: "2021-09-22",
//       dots: [
//         {
//           color: "red",
//           selectedColor: "red"
//         }
//       ]
//     }
//   ];
//   return (
//     <View style={{ flex: 1 }}>
//       <CalendarStrip
//         scrollable={true}
//         scrollerPaging={true}
//         updateWeek={true}
//         minDate={"2021-09-19"}
//         maxDate={"2021-09-28"}
//         startingDate={"2021-09-19"}
//         selectedDate={moment().format("YYYY-MM-DD")}
//         scrollToOnSetSelectedDate={true}
//         style={{
//           height: 200,
//           paddingTop: 20,
//           paddingBottom: 10
//         }}
//         calendarColor={"#3343CE"}
//         calendarHeaderStyle={{ color: "white" }}
//         dateNumberStyle={{ color: "white" }}
//         dateNameStyle={{ color: "white" }}
//         highlightDateNumberStyle={{ color: "yellow" }}
//         highlightDateNameStyle={{ color: "yellow" }}
//         disabledDateNameStyle={{ color: "black" }}
//         disabledDateNumberStyle={{ color: "black" }}
//         iconLeft={{
//           uri:
//             "https://raw.githubusercontent.com/BugiDev/react-native-calendar-strip/master/src/img/left-arrow-black.png"
//         }}
//         iconRight={{
//           uri:
//             "https://raw.githubusercontent.com/BugiDev/react-native-calendar-strip/master/src/img/right-arrow-black.png"
//         }}
//         datesWhitelist={datesWhitelist}
//       />
//     </View>
//   );
// }

import moment from "moment";
import { View, StyleSheet,scrollable } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';



const calendar= () => {

  let datesWhitelist = [
    {
      start: moment(),
      end: moment().add(30, "days")
    }
  ];
  
  return (
    <View style={styles.container}>
    <CalendarStrip
    calendarAnimation={{type: 'sequence', duration: 30}}
      datesWhitelist={datesWhitelist}
      scrollable={true}
      scrollerPaging={true}
      style={{height:100, paddingTop:10, paddingBottom:10}}
      calendarColor={'#f2f2f2'}
      calendarHeaderStyle={{color:'#404040'}}
      dateNumberStyle={{color: '#595959'}}
      dateNameStyle={{color: '#595959'}}
      iconContainer={{flex: 0.1}}
    />
  </View>
  )};
const styles = StyleSheet.create({
  container: { flex:0 }
});
export default calendar;




