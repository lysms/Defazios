import React, { useState }from 'react';
import { View, Text, TouchableOpacity, Button, TextInput } from 'react-native';
import Check from '../Check/Check';
import { Formik } from 'formik';
import styles from './MenuItemDetail.style';

// need to find out if these are unique or broad specifications
const MenuItemDetail = props => {
  
  const [clear, setClear] = useState(false);
  const [inputText, setInputText] = useState('');

  const handleSubmit = data => {
    console.log('submitted')
    setClear(false)
  }

  return (
    <View>
      <TouchableOpacity onPress={props.back}>
        <Text style={{ color: '#4A6CC2', marginVertical: 10}}>Return to Items</Text>
      </TouchableOpacity>
      <View>
        <Text style={{ fontWeight: "bold", marginBottom:10}}>Large Cheese Pizza (16")</Text>
        <Text>Tomato sauce, mozzarella cheese, Romano cheese and spices, cooked in an authentic Italian wood-fired oven. Add as many toppings as you want!</Text>
      </View>
      
      <View>
        <Formik
          initialValues={{test: ''}}
          onSubmit={values => console.log(values)}
        >
          {
            ({values}) => (
              <View> 

                <Text style={ styles.detailHeader }>Choose a Crust</Text>
                <Check title="Regular Crust" priceIncrease={0} initial={true}/>
                <Check title="Spicy Red Pepper Crust" priceIncrease={2.25} initial={clear}/>
                <Check title="Organic Multigrain Crust" priceIncrease={2.25} initial={clear}/>

                <Text style={ styles.detailHeader }>Add Pizza Toppings</Text>
                <Check title="add Bell Peppers" priceIncrease={2.25} initial={clear}/>
                <Check title="add Mushrooms" priceIncrease={2.25} initial={clear}/>
                <Check title="add Tomatoes" priceIncrease={2.25} initial={clear}/>
                <Check title="add Roasted Red Peppers" priceIncrease={2.25} initial={clear}/>
                <Check title="add Anchovies" priceIncrease={2.25} initial={clear}/>
                <Check title="add Red Onions" priceIncrease={2.25} initial={clear}/>
                <Check title="add Bell Extra Cheese" priceIncrease={2.25} initial={clear}/>
                <Check title="add Spinach" priceIncrease={2.25} initial={clear}/>
                <Check title="add Artichokes" priceIncrease={2.25} initial={clear}/>
                <Check title="add Pineapple" priceIncrease={2.25} initial={clear}/>
                <Check title="add Broccoli" priceIncrease={2.25} initial={clear}/>

                <Text style={ styles.detailHeader }>Add Sauce</Text>
                <Check title="add 5oz Side of Marinara Sauce" priceIncrease={2.25} initial={clear}/>
                <Check title="add 8oz Side of Marinara Sauce" priceIncrease={3.50} initial={clear}/>
                <Check title="add 3.5oz Side of Pesto" priceIncrease={4} initial={clear}/>

                <Text style={ styles.detailHeader }>Would you like it half baked?</Text>
                <Check title="Half Baked and Unsliced" priceIncrease={0} initial={clear}/>

                <Text style={ styles.detailHeader }>Special Requests</Text>
                <View style={ styles.specialRequests }>
                  <TextInput placeholder="Enter any special requests here" value={inputText} onChangeText={setInputText} multiline />
                </View>
                

                <View style={styles.btn}>
                  <Button color="black" title="Add to Order" onPress={handleSubmit}/> 
                </View>
              </View>
            )
          }
        </Formik>
      </View>
    </View>
  );
}

export default MenuItemDetail