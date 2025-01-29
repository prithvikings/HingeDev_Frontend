


// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  age: '',
  gender: '',
  isPremium: false,
  photoUrl: '',
  about: '',
  skills: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      // Ensure the full user object is saved in the Redux store
      const { id, firstName, lastName, email, age, gender, isPremium, photoUrl, about, skills } = action.payload;
      state.id = id;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.age = age;
      state.gender = gender;
      state.isPremium = isPremium;
      state.photoUrl = photoUrl;
      state.about = about;
      state.skills = skills;
    },
    removeUser:(state,action)=>{
            return null;
        },
  },
});

export const { addUser,removeUser } = userSlice.actions;
export default userSlice.reducer;
