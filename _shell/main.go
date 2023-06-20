package main

import (
	"fmt"
	"net/http"
)

func main() {
	prot := "9988"

	var HostPath = "0.0.0.0:"+prot

	var OpenHost = "http://localhost:" + prot

	fmt.Println(OpenHost)
	
	http.ListenAndServe(HostPath, http.FileServer(http.Dir("dist")))
}
