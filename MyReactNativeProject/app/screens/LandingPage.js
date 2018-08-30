import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert,
    SectionList
} from "react-native";

export default class LandingPage extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: "Landing",
        headerTintColor: "#FFFFFF",
        headerStyle: styles.headerStyle,
        headerRight: (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Tos");
                }}
            >
                <Text style={styles.headerButtonStyle}>Terms</Text>
            </TouchableOpacity>
        )
    });

    constructor(props) {
        super(props);
        this.state = {
            peopleList: [],
            listRefreshing: false
        };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        this.setState({
            peopleList: [
                {
                    section: "Employees",
                    data: [
                        { key: "1", fname: "Jay", lname: "Casilang" },
                        { key: "2", fname: "Rex", lname: "Reyes III" },
                        { key: "3", fname: "Jordan", lname: "Balintac" },
                        { key: "4", fname: "Allan", lname: "Castro" },
                        { key: "5", fname: "Louie", lname: "Yap" },
                        { key: "6", fname: "Amiel", lname: "Zaldua" },
                        { key: "7", fname: "Mon", lname: "Zalmeda" },
                        { key: "8", fname: "Rod", lname: "Bocobo" },
                        { key: "9", fname: "Elther", lname: "Barrientos" },
                        { key: "10", fname: "Anthony", lname: "Wong" },
                        { key: "11", fname: "Ronyan", lname: "Flores" },
                        { key: "12", fname: "Ayna", lname: "Mamaril" },
                        { key: "13", fname: "Jay", lname: "Casilang" },
                        { key: "14", fname: "Rex", lname: "Reyes III" },
                        { key: "15", fname: "Jordan", lname: "Balintac" },
                        { key: "16", fname: "Allan", lname: "Castro" },
                        { key: "17", fname: "Louie", lname: "Yap" },
                        { key: "18", fname: "Amiel", lname: "Zaldua" },
                        { key: "19", fname: "Mon", lname: "Zalmeda" },
                        { key: "20", fname: "Rod", lname: "Bocobo" },
                        { key: "21", fname: "Elther", lname: "Barrientos" },
                        { key: "22", fname: "Anthony", lname: "Wong" },
                        { key: "23", fname: "Ronyan", lname: "Flores" },
                        { key: "24", fname: "Ayna", lname: "Mamaril" }        
                    ]
                },
                {
                    section: "Customers",
                    data: [
                        { key: "1", fname: "Jay", lname: "Casilang" },
                        { key: "2", fname: "Rex", lname: "Reyes III" },
                        { key: "3", fname: "Jordan", lname: "Balintac" },
                        { key: "4", fname: "Allan", lname: "Castro" },
                        { key: "5", fname: "Louie", lname: "Yap" },
                        { key: "6", fname: "Amiel", lname: "Zaldua" },
                        { key: "7", fname: "Mon", lname: "Zalmeda" },
                        { key: "8", fname: "Rod", lname: "Bocobo" },
                        { key: "9", fname: "Elther", lname: "Barrientos" },
                        { key: "10", fname: "Anthony", lname: "Wong" },
                        { key: "11", fname: "Ronyan", lname: "Flores" },
                        { key: "12", fname: "Ayna", lname: "Mamaril" },
                        { key: "13", fname: "Jay", lname: "Casilang" },
                        { key: "14", fname: "Rex", lname: "Reyes III" },
                        { key: "15", fname: "Jordan", lname: "Balintac" },
                        { key: "16", fname: "Allan", lname: "Castro" },
                        { key: "17", fname: "Louie", lname: "Yap" },
                        { key: "18", fname: "Amiel", lname: "Zaldua" },
                        { key: "19", fname: "Mon", lname: "Zalmeda" },
                        { key: "20", fname: "Rod", lname: "Bocobo" },
                        { key: "21", fname: "Elther", lname: "Barrientos" },
                        { key: "22", fname: "Anthony", lname: "Wong" },
                        { key: "23", fname: "Ronyan", lname: "Flores" },
                        { key: "24", fname: "Ayna", lname: "Mamaril" }        
                    ]
                }
            ]
        });
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                }}
            />
        );
    };

    render() {
        return (
            <View style={styles.mainView}>
                <SectionList
                    style={styles.listView}
                    sections={this.state.peopleList}
                    ItemSeparatorComponent={this.renderSeparator}
                    refreshing={this.state.listRefreshing}
                    onRefresh={async () => {
                        await this.setState({ listRefreshing: true });
                        await new Promise(resolve => setTimeout(resolve, 5000));
                        await this.setState({
                            peopleList: [
                                {
                                    section: "Employees",
                                    data: [
                                        {
                                            key: "1",
                                            fname: "Jay",
                                            lname: "Casilang"
                                        },
                                        {
                                            key: "2",
                                            fname: "Rex",
                                            lname: "Reyes III"
                                        },
                                        {
                                            key: "3",
                                            fname: "Jordan",
                                            lname: "Balintac"
                                        },
                                        {
                                            key: "4",
                                            fname: "Louie",
                                            lname: "Yap"
                                        },
                                        {
                                            key: "5",
                                            fname: "Amiel",
                                            lname: "Zaldua"
                                        }
                                    ]
                                },
                                {
                                    section: "Customers",
                                    data: [
                                        {
                                            key: "1",
                                            fname: "Jay",
                                            lname: "Casilang"
                                        },
                                        {
                                            key: "2",
                                            fname: "Rex",
                                            lname: "Reyes III"
                                        },
                                        {
                                            key: "3",
                                            fname: "Jordan",
                                            lname: "Balintac"
                                        },
                                        {
                                            key: "4",
                                            fname: "Louie",
                                            lname: "Yap"
                                        }
                                    ]
                                }
                            ]
                        });
                        await this.setState({ listRefreshing: false });
                    }}
                    renderSectionHeader={({ section }) => (
                        <Text style={styles.sectionHeader}>
                            {section.section}
                        </Text>
                    )}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: "column",
                                    paddingTop: 5,
                                    paddingBottom: 5
                                }}
                            >
                                <View
                                    style={{
                                        flex: 1,
                                        flexDirection: "row",
                                        alignItems: "center"
                                    }}
                                >
                                    <Text
                                        style={{
                                            paddingRight: 10,
                                            width: 100
                                        }}
                                    >
                                        Last Name:
                                    </Text>
                                    <Text>{item.lname}</Text>
                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        flexDirection: "row",
                                        alignItems: "center"
                                    }}
                                >
                                    <Text
                                        style={{
                                            paddingRight: 10,
                                            width: 100
                                        }}
                                    >
                                        First Name:
                                    </Text>
                                    <Text>{item.fname}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: "bold",
        backgroundColor: "rgba(247,247,247,1.0)"
    },
    listView: {
        flex: 1
    },
    headerStyle: {
        backgroundColor: "#2196F3"
    },
    headerButtonStyle: {
        color: "#FFFFFF",
        padding: 20
    }
});
