import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("https://634857c60484786c6e97d30d.mockapi.io/contacts");
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const addContact = createAsyncThunk(
    "contacts/addContacts",
    async (contact, thunkAPI) => {
        try {
            const response = await axios.post("https://634857c60484786c6e97d30d.mockapi.io/contacts", {
                name: contact.name,
                phone: contact.number,
            });
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contact/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`https://634857c60484786c6e97d30d.mockapi.io/contacts/${contactId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);