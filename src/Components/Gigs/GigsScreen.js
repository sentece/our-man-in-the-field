import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { RefreshControl, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { CustomHeader } from '../Menu/CustomHeader';
import Flag from 'react-native-flags';
import { GetGigs } from '../../Reducers/Gigs'
import { format } from 'date-fns'
import { FlatList } from 'react-native-gesture-handler';
import { dateSort } from '../../Utils'

class GigsScreen extends Component {
    componentDidMount() {
        if (!this.props.gigs.gigs.length) {
            this.props.dispatch(GetGigs())
        }
    }

    onRefresh() {
        this.props.dispatch(GetGigs())
    }

    render() {

        if (!this.props.gigs.gigs.length) {
            return null;
        }
        return (
            <Fragment>
                <CustomHeader navigation={this.props.navigation} style={{ backgroundColor: "#000" }}></CustomHeader>
                <FlatList data={this.props.gigs.gigs.sort(dateSort)}
                    style={{ backgroundColor: "#000" }}
                    keyExtractor={(item, index) => String(index)}

                    refreshControl={
                        <RefreshControl
                            refreshing={this.props.gigs.loading}
                            onRefresh={() => { this.onRefresh() }}
                        />
                    }
                    renderItem={({ item }) => <ListItem
                        title={format(new Date(item.date), 'MMMM do, yyyy')}
                        titleStyle={{ color: '#EDC068', backgroundColor: "#000" }}
                        subtitle={item.location}
                        rightIcon={<Flag code={item.country} size={32} />}
                        subtitleStyle={{ color: '#fff' }}
                        containerStyle={{ backgroundColor: "#000" }}

                        bottomDivider
                    />}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gigs: state.gigs
    };
};

export default connect(mapStateToProps)(GigsScreen);