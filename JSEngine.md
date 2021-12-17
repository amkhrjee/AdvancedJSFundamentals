# ⚙️ The JavaScript Engine

JavaScrip Engine is the program that is in-charge of executing JavaScript code. When JavaScript first came into existence it was only meant to be used inside the browser. But today, we see JavaScript running in all sorts of places even outside the browser - including servers, machines etc. And hence, JavaScript Engine has to be present in all of these too.

## 🤔 JSRE

The JavaScript Engine along with several other components like the Event Loop, the Callback Queue, the MicroTask Queue - is called the JSRE or the JavaScript Runtime Environment.

## 💅🏻 Different JS Engines

As JS has to be run in different devices and environments, there are several JS engines that do these jobs. Different browsers have different JS engines.

- The Internet Explorer and Microsoft Edge used to have the **_Chakra_** engine.
- **_SpiderMonkey_** is used in Mozilla Firefox
- Safari uses **_JavaScriptCore_**
- Most modern browsers like Chrome, MSEdge, Brave, Opera and even server-side JSREs like NodeJS, Deno use Google's **_v8_** engine.

## 🏗️ JS Engine Architecure

Different JavaScript Engines have different implementations and different set of features, but we can still generalize all JS engines for the sake of simplicity and getting an idea of their general architecture.

┌─────────────────────────┐
│                         │
│           Code          │
│                         │
└────────────┬────────────┘
             │
             │
             │                          ┌─────────────────────────────┐
┌────────────▼─────────────┬───────────►│                             │
│                          │            │      Code is broken down    │
│        Parsing           ├───────────►│      into tokens.           │
│                          │            │                             │
└─────────────┬────────────┴───────────►└──────────────┬──────────────┘
              │                                        │
              │                                        │
              │                                        │
              │                                        │
┌─────────────▼────────────┐             ┌─────────────▼──────────────┐
│                          │             │                            │
│       Compilation        │             │        Syntax Parser       │
│                          │             │                            │
└─────────────┬────────────┘             └─────────────┬──────────────┘
              │                                        │
              │                                        │
              │                                        │
              │                                        │
              │                                        │
 ┌────────────▼────────────┐             ┌─────────────▼─────────────────┐
 │                         │             │                               │
 │      Execution          │             │   Converts code to AST.       │
 │                         │             │                               │
 └─────────────────────────┘             │   AST = Abstact Syntax Tree   │
                                         │                               │
                                         └───────────────────────────────┘