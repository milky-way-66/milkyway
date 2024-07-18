# The milky way

## I, Requirement

### The story

-   As an developer, i want to tell stories about what i daily facing at work and life
-   As an passenger, you pass by my milky way and randomly hear about my stories

`So, What is the Story` <br>
Well, it can be anything, a random story about the can pop up in my room, or about the way i design and scalable system. There is no restriction on these stories.

### So, what is the use case

-   Publish new story
-   Search for a story
-   Read story
-   Get relate story base on what passenger have read
    <br>

#### 1, Publish new story

|          |                                                                                                                              |
| -------- | :--------------------------------------------------------------------------------------------------------------------------: |
| Actor    |                                                              Me                                                              |
| Describe |                                      I go to website to write new story and publish it                                       |
| Process  | I will make it simple at this moment since i don't have backend server yet, so i will store json data in source code it self |

#### 2, Search for a story

|          |                                                                                                                              |
| -------- | :--------------------------------------------------------------------------------------------------------------------------: |
| Actor    |                                                          Passenger                                                           |
| Describe |                             Passenger go to website, scroll thought page and search for an story                             |
| Process  | Go to website >> scroll forever >> give up >> see filter on the right >> typing some condition and search >> and here we go! |

In order to make it, we need:
- List of story
- Filter form, i want to make it simple so just let it only have an search box
- I don't like paging so let make an infinite scrolling
- I also want to make lazy load but it can be save for later

## II, Development strategy

### Test Driven Design

I have hear about this technique for a long time but never try it, so why we don't give it a try.
