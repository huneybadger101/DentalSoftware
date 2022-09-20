import { Button, Text, View } from "@nodegui/react-nodegui";
import {  WidgetEventTypes } from "@nodegui/nodegui";
import React from "react";
import Bookings from "./bookings";
import Calendar from "./calendar";
import BookingPageDentalCharts from "./Calendarhelpers/bookingDentalChart";
import PatientDataViewer from "./PatientDataViewer";
import PatientCreator from "./patientCreator";
//import Setting from "./setting";


export class Homepage extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
      }

    newTab(component: JSX.Element, name: string) {
        this.props.newTab(component, name)
    }

    // Function that returns a component to be drawn, can have children components if the parent component supports it
    render() {

        let pagesRow1 = [];
        let pagesRow2 = [];

        let buttonStyle = "width: 400%; height: 200%; color: 'black'; font-size: 20px;";
        
        pagesRow1.push(<Button style={buttonStyle} text="Bookings Page" on={
                {
                    // Only trigger when left click is released
                    [WidgetEventTypes.MouseButtonRelease]: () => this.newTab(<BookingPageDentalCharts/>, "Dnetal chart for booking"),
                }
            }/>)
        pagesRow1.push(<View style="width: 100%;"></View>)
        pagesRow1.push(<Button style={buttonStyle} text="Calendar Page" on={
                {
                    // Only trigger when left click is released
                    [WidgetEventTypes.MouseButtonRelease]: () => this.newTab(<Calendar/>, "Calendar"),
                }
            }/>)
        pagesRow2.push(<Button style={buttonStyle} text="Patient Creator" on={
                {
                    // Only trigger when left click is released
                    [WidgetEventTypes.MouseButtonRelease]: () => this.newTab(<PatientCreator/>, "Patient Creator"),
                }
            }/>)
        pagesRow2.push(<View style="width: 100%;"></View>)
        // pagesRow2.push(<Button style={buttonStyle} text="Settings Page" on={
        //         {
        //             // Only trigger when left click is released
        //             [WidgetEventTypes.MouseButtonRelease]: () => this.newTab(<Setting/>, "Settings"),
        //         }
        //     }/>)

        return (
            <View style="flex: 1; justify-content: 'center'; align-items: 'center'; background-color: 'grey';">
                <View style="flex: 1; flex-direction: 'row';">
                </View>
                <View style="flex: 2; flex-direction: 'row';">
                    {pagesRow1}
                </View>
                <View style="flex: 2; flex-direction: 'row';">
                    {pagesRow2}
                </View>
                
            </View>
        );
    }
} 

export default Homepage;
