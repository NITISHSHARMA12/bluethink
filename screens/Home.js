import React from 'react';
import { StyleSheet, Dimensions, ScrollView, View, Text, Button  } from 'react-native';
import { Block, theme } from 'galio-framework';
 

import { Card } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

class Home extends React.Component {
  renderArticles = () => {
    const { navigation } = this.props;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
               
                <Button  style={{ marginRight:40,
    marginLeft:40,
   marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#1E6738',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'}}
                    title="Pending Order"  
                    onPress={() => navigation.navigate('PendingOrder')}
                 />  
                <Button  
                    title="Completed Order"  
                    onPress={() => navigation.navigate('CompletedOrder')} 
                />  
            </View>  
        </Block>
      </ScrollView>
    )
  }

  render() {
    //const { navigation } = this.props;
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;
