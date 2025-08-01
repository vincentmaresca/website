package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func handler(responseWriter http.ResponseWriter, response *http.Request) {
	fmt.Fprint(responseWriter, "Hello, World!")
}
