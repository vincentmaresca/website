package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	log.Print("Starting Server")
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func handler(responseWriter http.ResponseWriter, response *http.Request) {
	log.Print("Someone has connected to our server :O")
	fmt.Fprint(responseWriter, "Hello, World!")
	fmt.Fprint(responseWriter, "This is a test for merging branches!")
}
