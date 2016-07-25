import React from 'react';
import { View,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet,
    Animated} from 'react-native';

export default function render(baseStyles) {
    const doneAnimation = new Animated.ValueXY();

    const localStyles = StyleSheet.create({
        doneButton: {
            borderRadius: 20,
            padding: 2
        },
        row: {
            transform: doneAnimation.getTranslateTransform()
        },
        buttonIcon: {
            width: 30,
            height: 30
        }
    });

    function animatedPress() {
        const anim = Animated.timing(doneAnimation, {
            duration: 700,
            toValue: {
                x: -1000,
                y: 0
            }
        });

        anim.start(() => {
            anim.stop();
            setTimeout(() => {
                Animated.timing(doneAnimation, {
                    duration: 10,
                    toValue: {
                        x: 0,
                        y: 0
                    }
                }).start(()=>this.props.onDone(this.props.todo))
            }, 1000);
        })
    }

    return (
        <Animated.View style={[baseStyles.container, localStyles.row]}>
            <Text style={baseStyles.label}>{this.props.todo.task}</Text>

            <TouchableHighlight style={localStyles.doneButton}
                                underlayColor={'#cccccc'}
                                onPress={animatedPress.bind(this)}>
                <Image source={require('./../../assets/images/icon.png')}
                       style={localStyles.buttonIcon}/>
            </TouchableHighlight>
        </Animated.View>
    );
}