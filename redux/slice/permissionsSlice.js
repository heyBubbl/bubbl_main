import {createSlice} from '@reduxjs/toolkit';

export const permissionsSlice = createSlice({
  name: 'permissions',
  initialState: {
    microphone: false,
    speech: false,
  },
  reducers: {
    setMicrophonePermission: (state, action) => {
      state.microphone = action.payload;
    },
    setSpeechPermission: (state, action) => {
      state.speech = action.payload;
    },
  },
});

export const {setMicrophonePermission, setSpeechPermission} =
  permissionsSlice.actions;

export default permissionsSlice.reducer;
