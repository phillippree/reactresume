export var SERVER_URL;

if (process.env.NODE_ENV === 'development'){
    SERVER_URL="http://localhost:8000";
} else {
    SERVER_URL="";
}