import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';


const CheckoutScreen = () => {

    const progressStepStyle={
      activeStepIconBorderColor: '#4B4B4B',
      activeLabelColor: '#000',
      labelColor: '#000',
      completedProgressBarColor: '#F49F1C',
      completedCheckColor: '#fff',
      completedStepIconColor: '#F49F1C'
    }

    defaultScrollViewProps = {
      keyboardShouldPersistTaps: 'handled',
      contentContainerStyle: {
        flex: 1,
        justifyContent: 'center'
      }
    };

  return (
    <SafeAreaView >
      <View style={{flex: 1}}>
        <ProgressSteps {...progressStepStyle}>
            <ProgressStep label="Delivery Address" scrollViewProps={this.defaultScrollViewProps}>
                <View style={{ alignItems: 'center' }}>
                    <Text>Select Delivery Address</Text>
                </View>
            </ProgressStep>
            <ProgressStep label="Payment Method" scrollViewProps={this.defaultScrollViewProps}>
                <View style={{ alignItems: 'center' }}>
                    <Text>Choose Payment Method</Text>
                </View>
            </ProgressStep>
            <ProgressStep label="Finish" scrollViewProps={this.defaultScrollViewProps}>
                <View style={{ alignItems: 'center' }}>
                    <Text>Your Order Placed</Text>
                </View>
            </ProgressStep>
        </ProgressSteps>
    </View>
    </SafeAreaView>
  );
};

export default CheckoutScreen;