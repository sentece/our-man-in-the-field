import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Styles } from '../../Style/Stylesheet';
import { GetGigs } from '../../Reducers/Gigs'

class GigsScreen extends Component {
    componentDidMount() {
        if (!this.props.gigs.length) {
            this.props.dispatch(GetGigs())
        }
    }
    render() {

        if (!this.props.gigs.length) {
            return null;
        }
        return (

            <View style={Styles.container}>
                {
                    this.props.gigs.map((l, i) => (
                        <ListItem
                            key={i}
                            title={l.name}
                            titleStyle={{ color: '#EDC068' }}
                            subtitle={l.name}
                            bottomDivider
                        />
                    ))
                }
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gigs: state.gigs.gigs
    };
};




export default connect(mapStateToProps)(GigsScreen);
