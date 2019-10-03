import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import {Styles} from '../Style/Stylesheet'
import * as Gigs from '../json/gigs.json';


class GigsScreen extends Component {
    render() {
        return (
            <View style={Styles.container}>
                {
                    Gigs.gigs.map((l, i) => (
                        <ListItem
                            key={i}
                            title={l.name}
                            titleStyle={{ color: '#EDC068'}}
                            subtitle={l.name}
                            bottomDivider
                        />
                    ))
                }
            </View>
        );
    }
}

export default GigsScreen;
