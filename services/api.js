import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://nuvnfakeqwndaotqcbgl.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51dm5mYWtlcXduZGFvdHFjYmdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2MTQ4MTQsImV4cCI6MjA0NTE5MDgxNH0.OAMqsp56P1KdhaRxIms5y9U30rb8UuxFy7_0dqOp9fM",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51dm5mYWtlcXduZGFvdHFjYmdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2MTQ4MTQsImV4cCI6MjA0NTE5MDgxNH0.OAMqsp56P1KdhaRxIms5y9U30rb8UuxFy7_0dqOp9fM"
    }
})