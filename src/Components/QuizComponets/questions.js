import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';

const Quiz = (props) => {
  const [selectedOption, setSelectedOption] = React.useState(null);
  const questions = [
    {
      questionText: 'Brother Lorem Ipsum text of the printing and typesetting industry',
      answers: [
        {
          label: "Australia",
          value: 0
        },
        {
          label: "Ausdcvdvtralia",
          value: 0
        },
        {
          label: "sadwewdwf",
          value: 0
        },
        {
          label: "Australia",
          value: 1
        }
      ]
    },
    {
      questionText: 'Brother Lorem Ipsum text of the printing and typesetting industry',
      answers: [
        {
          label: "Australia",
          value: 0
        },
        {
          label: "Ausdcvdvtralia",
          value: 0
        },
        {
          label: "sadwewdwf",
          value: 0
        },
        {
          label: "Australia",
          value: 1
        }
      ]
    },
    {
      questionText: 'Brother Lorem Ipsum text of the printing and typesetting industry',
      answers: [
        {
          label: "Australia",
          value: 0
        },
        {
          label: "Ausdcvdvtralia",
          value: 0
        },
        {
          label: "sadwewdwf",
          value: 0
        },
        {
          label: "Australia",
          value: 1
        }
      ]
    },
  ]
  function RadioButton({ options, selectedOption, onSelect }) {
    return (
      <View style={styles.buttonContainer}>
        {options.map((item) => {
          return (
            <View key={item.id} style={[styles.buttonContainer, { flexDirection: 'row' }]}>
              <View style={styles.flexroewsetandborder}>
                <TouchableOpacity
                  style={styles.circle}
                  onPress={() => {
                    onSelect(item.text)
                  }}>
                  {selectedOption === item.text && <View style={styles.checkedCircle} />}
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
  const onSelect = (item) => {
    console.log(item);
    setSelectedOption(item);
  };
  return (
    <View style={styles.minstyleviewphotograpgy}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <View style={styles.keybordtopviewstyle}>
          <KeyboardAvoidingView enabled>
            <View style={styles.minflexview}>
              <View style={styles.minviewsigninscreen}>
                <View style={styles.screen}>
                  <RadioButton
                    selectedOption={selectedOption}
                    onSelect={onSelect}
                    options={questions}
                    formHorizontal={false}
                    value={selectedOption}
                  />
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  backButton: {
    marginRight: 10,
  },
  textsetwidth: {
    width: '80%',
  },
  paregraphtextset: {
    color: 'black',
    fontFamily: 'DMSans-Medium',
    fontSize: 15,
  },
  buttonflexminview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 30,
    paddingTop: 15,
  },
  buttontextcoloset1: {
    backgroundColor: 'white',
    color: 'hsl(216.8, 90.7%, 38%)',
    fontFamily: 'DMSans-Bold',
    fontSize: 18,
  },
  buttontextcoloset2: {
    color: 'white',
    fontFamily: 'DMSans-Bold',
    fontSize: 18,
  },
  rediobuttonstylre: {
    marginTop: 5,
    marginRight: -10,
  },
  flexDirectionrow2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    textAlign: 'center',
    marginTop: '1%'

  },
  buttonContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: '1%',
    marginBottom: '0%',

  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    marginRight: '2%',
    borderColor: 'hsl(214.3, 83.2%, 51%)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkedCircle: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: 'hsl(214.3, 83.2%, 51%)',
  },
  userdetailstext: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
    marginStart: '1.5%',
    width: '90%',
  },
  flexroewsetandborder: {

    width: '100%',
    alignItems: "center",
    borderWidth: 1,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 15,
    borderRadius: 5,
    borderColor: 'hsl(214.3, 83.2%, 51%)',
  },
  minstyleviewphotograpgy: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
  keybordtopviewstyle: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  minviewsigninscreen: {
    width: '92%',
    marginHorizontal: '5%',
    marginTop: '5%',
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default Quiz;