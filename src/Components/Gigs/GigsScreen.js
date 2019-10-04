import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Styles } from '../../Style/Stylesheet';
import { CustomHeader } from '../Menu/CustomHeader';
import { GetGigs } from '../../Reducers/Gigs'
import { format } from 'date-fns'

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
            <Fragment>
                <CustomHeader navigation={this.props.navigation}></CustomHeader>
                <View style={Styles.container}>
                    {
                        this.props.gigs.map((l, i) => (
                            <ListItem
                                key={i}
                                title={format(new Date(l.date), 'MMMM do, yyyy')}
                                titleStyle={{ color: '#EDC068' }}
                                subtitle={l.location}
                                bottomDivider
                            />
                        ))
                    }
                </View>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gigs: state.gigs.gigs
    };
};

export default connect(mapStateToProps)(GigsScreen);