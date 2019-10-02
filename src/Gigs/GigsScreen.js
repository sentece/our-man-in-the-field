import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import * as Gigs from '../json/gigs.json';

class GigsScreen extends Component {
    render() {
        return (
            <View>
                {
                    Gigs.gigs.map((l, i) => (
                        <ListItem
                            key={i}
                            title={l.name}
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
