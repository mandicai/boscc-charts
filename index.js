let descriptions = [
  "An introduction to sensors, microcontrollers and how they fit into the larger context of the Internet of Things (IoT). This session will include an overview of the various sensors and outputs that are available. We’ll spend a good amount of time talking about what microcontrollers are, how programming them differs from desktop/web programming and how they are used to connect to sensors and networks. The second half will be spent looking at actual code from several examples using the Arduino platform. Microsoft Cognitive Services enables developers with powerful set of APIs that can be used to develop intelligent apps with powerful algorithms, using just a few lines of code. The API enables developers to easily add intelligent features – such as emotion and video detection; facial, speech and vision recognition; and speech and language understanding – into their applications with minimum effort. This session will show case how to get started with the API and how it can be integrated with your application. The session will also discuss the CNTK that runs behind the scene.",
  "A typical web application relies on Open Source code written by thousands of people, and they are a lot like you! Come learn the overall workflow to fix the bugs that annoy you, add the features you want, and get help along the way. We'll do some hands-on activities, so bring a laptop.",
  "Contributing to Open Source is a great way to learn new things, find a technical mentor, build up your network, and stay current on new technology. By the end of this session, you'll have everything you need to get started or re-started.",
  "The OWASP Top Ten Proactive Controls 2018 is a list of security techniques to include in every software development project. The order is by importance, with control number 1 being the most important. The Proactive Controls is a document written by developers for developers to assist them in getting started with secure development. The controls covered will be:",
  "Define Security Requirements, Leverage Security Frameworks and Libraries, Secure Database Access, Encode and Escape Data, Validate All Inputs, Implement Digital Identity, Enforce Access Controls, Protect Data Everywhere, Implement Security Logging and Monitoring, Handle All Errors and Exceptions",
  "PowerShell is not a 'Windows thing' anymore. And now that PowerShell is both open-source and cross-platform, there's no better environment for building user-friendly command line interfaces. In this talk, we’ll use PowerShell to create a CLI for a SAAS application. We’ll demonstrate how PowerShell gives you and your users a way to get more value out of fewer commands. We’ll demonstrate how your users can script your CLI with more readibility, but invoke it from a command shell with less typing. And, your CLI will work consistently on Linux, MacOS, and Windows without any duplication of effort on your part.",
  "Managing access to multiple disparate resources and services is one of the more challenging aspects of modern cloud architectures. Databases have user ids and passwords, APIs are secured by tokens and claims, and service busses and event hubs are governed by access policies. Wouldn't it be great if all these credentials were just taken care of for you?! That's the goal of managed identities for Azure resources (formerly known as Managed Service Identity). In this session, we'll see how to let Azure Active Directory do the work to handle cross-authentication of a host of Azure services, so you can can concentrate on the business value of your app, stress-free!",
  "The next release of C# is taking shape. It's still a fuzzy shape, but there's lots to discuss. There are many additions to the language beyond nullable reference types. You'll see an overview of nullable types. In addition, you'll see the proposals for async streams, recursive patterns, ranges and more. There's more to love in your favorite language.",
  "Redis is a popular open source distributed cache system. It's built for performance and reliability, and has countless uses for speeding up your application. However, it can be a little overwhelming to figure out how to get started.",
  "This talk will first introduce you to the Redis server basics and some of its common usage patterns. Then we'll learn how to add Redis support to your new and existing .NET applications using some of the best community supported libraries.",
  "The new wave of IoT Solutions is at the intersection of AI, Cloud, and Edge Computing. Analytics create business value in an IoT solution, but not all analytics need to be run on the cloud. Azure IoT Edge enables you to run containerized cloud workloads locally on devices ranging from Raspberry Pi to more advanced gateways.",
  "In this session, we’ll talk about the main components of Azure IoT Edge (EdgeHub, EdgeAgent and Security Daemon). We'll then demonstrate: 1) How to register an edge device and install the IoT edge runtime 2) Develop, debug and deploy modules on the edge device 3) Set up the edge device as a transparent gateway 4) Find insights on the edge 5) Troubleshooting tips. We'll end the talk by sharing our learnings from an actual IoT edge implementation for a healthcare company",
  "Success of a good BI infrastructure is measured by two most important factors: Better access to data and Increased operational efficiency How can you set up your own BI infrastructure in the cloud to address these? What components do we consider? We can do that by proper selection of technology and vendors from Azure Market Place. How do we keep an eye on possible use of Big Data for your BI. We will also look at the best practices for doing so. We will take a fleeting look at some of the storage options for us in Azure and some Big Data concepts as well. We will learn about Copy Data Virtualization in Azure Market Place that can help you provision terabytes worth of information in matter of minutes. We will also learn about setting up teams and ways to train them(and yourself) in this fast evolving world of Azure. Prerequisites: Some working knowledge of RDBMS systems and some components of BI infrastructure like SSIS, SSRS, redundancy.",
  "Finally you have decided to get in to AI and trying to learn how to get started. You may have noticed that nearly every “getting started” guide you come across image classification uses either the MNIST or CIFAR-10 datasets which are built into Keras and other deep learning libraries. You just call one of those functions and the data is automatically loaded for you. But, what about if you want to train a models with your own images? In this session, I will go with a different take that will show how to setup your model training environment, build and operationalize your first neural network and Convolutional Neural Network with your custom image dataset.",
  "Bitcoin gets a lot of attention these days, but it’s the Ethereum Blockchain that has led to the most exciting advances in the cryptocurrency space. With its Smart Contracts, the Ethereum Virtual Machine (EVM) allows for a new class of distributed applications to be developed – not just those that are currency based. This talk will introduce the Ethereum Blockchain, and its fundamental concepts, as well as walk through creating Smart Contracts with Solidity and a basic Distributed Application (DApp) using web3.js and Truffle. No previous crypto experience is assumed.",
  "Microsoft Azure has emerged as one of the dominant public cloud platforms for developers and IT pros. But what are the tools to help us keep applications stay safe and secure? In this Azure-focused talk, we'll cover 18 of them. We'll warm up with a couple of high-level topics like compliance and multi-factor authentication, move on to security features of more popular services (like Storage, SQL, Web Apps, and VMs) including some that many long-time users don't know about, then shift gears to talk about security-focused services that have come out recently or are in preview. Topics we'll touch on will span administration, secret management, encryption, firewalls, networks, PowerShell, and more. Along the way we'll even dispel a couple of myths about cloud security. You'll walk away impressed with the breadth and depth of Azure's security story - and have a bunch of new tools for your security toolbox.",
  "The S.O.L.I.D. principles are the five commandments of software development. They surpass frameworks and patterns and are the basis of good software. S.O.L.I.D. is the basis of maintainable code. This session describes and illustrates each of the principles, helping attendees learn what they are and how they can benefit you. If you are already a believer, this session will help illustrate ways you can implement S.O.L.I.D. If you wonder what S.O.L.I.D. is, this session will explain.",
  "Stop flying blind and use Azure Application Insights to monitor web site availability, performance, feature usage and exceptions. In this sessions you will learn how to add Application Insights to any application, what kind of information it can provide and how to use that information to make your application better for your users.",
  "For every mobile cross platform developer, it's important not only create a look and feel of a native application, but provide access to native functionality. The easiest way to access native APIs when building apps with Xamarin is Xamarin.Essentials. In this session you’ll learn more about Xamarin and Xamarin.Forms specifics, ways of accessing native functionality and overview of Xamarin.Essentials. Learn about the newest tools for cross platform developers and ways of making your Xamarin app look, feel and function same way as native.",
  "In this session, I will walk thru the process of getting started with Azure Marketplace and publishing Virtual Machine and Web Applications.",
  "The standard for web REST API specifications has moved to the OpenAPI standard. This 30 minute session will cover API lifecycle history/evolution of OpenAPI from Swagger OpenAPI alternatives elements of the OpenAPI sepcification OpenAPI GUI editor code generation from OpenAPI specification client server using OpenAPI for requirements definition, development, testing and documentation",
  "Natural Language Processing takes free-form text and turns it into structured data. With the rise of machine learning and neural networks, it’s easier than ever to do advanced analysis and search. We’ll cover the basic types of NLP, learn some common patterns for using the data in an app, and sample the libraries available to web developers. This is an interactive presentation. Come see how both the human audience and computers perform when presented with a Mad Libs-like challenge.",
  "This talk will provide an introduction to Angular. This session is designed to be a very beginner level introductory session to using Angular.",
  "Integrating the Ask My Buddy Alexa Skill The Ask My Buddy Alexa skill lets you immediately alert someone in your Personal Alert Network that you need help. By linking one’s contact list to the application, the user can verbally dictate who to call for assistance. Reviewers consistently state that Ask My Buddy has been a “peace of mind” by using its capabilities to deter tragedies every day.",
  "Integrating the Alexa Smart Home Skill The Alexa Smart home skill API provides a simple way for users to enable Alexa voice interaction. Smart Home Skills define and handle voice interactions for the user which simplifies the developer’s job. Alexa interprets user utterances and sends messages to your skill. In addition, the Smart Home Skill API enables you to display the up-to-date status of configured devices in the Alexa app.",
  "Bluetooth Interface (v1.0) The Bluetooth interface exposes directives and events that are used to manage a client's Bluetooth connection with peer devices, such as smart phones, and Bluetooth-enabled speakers.",
  "In our quest to improve user experience, we often end up bloating websites with too much content, leading to performance issues. Slow websites are a pain, and studies have shown that up to 40% of users abandon pages that take three or more seconds to load. How can we improve performance, and how can we leverage perceived performance?",
  "The most important part of programming is thinking, not typing. What happens when we encounter a language that requires a different kind of thinking to be effective? Not just another front end framework, Elm is a new(ish) language designed for stateful web applications. I'll talk about how to solve problems with types and functions, the benefits of managed state & side-effects, how the compiler becomes your pair programming buddy, and why a language with no variables isn't as weird as it might sound.",
  "As a DBA you are responsible for much more than simply backup and recovery of databases. This session will go over how to backup some SQL Server objects like Alerts, DBMail, LinkedServers, SQL Agent properties, and others with PowerShell. Prerequisites: Knowledge of what a DBA should be doing as well as basic PowerShell.",
  "Mob Programming is when a group of three or more people develop together at the same time. On its face, this process can seem expensive, but given a set of guidelines, teams can experience a boost in productivity, share system knowledge, and remove impediments and blockers by being in the same room.",
  "In this talk, we'll discuss the basics of reactive programming and dive into how RxJS can help improve your front-end applications.",
  "JSON has become the defacto standard for exchanging data between applications and over the web. SQL Server 2016 provides built-in support for JSON. This presentation will: Provide a brief introduction to JSON Describe the SQL Server 2016 functions that can be used to parse / format JSON data Demonstrate the use of these functions against a dataset containing movie data in JSON format Visualize the results in a Power BI report",
  "Platforms such as Kaggle or Algorithmia allow users to develop and execute code on a remote system. Often platforms of this type will offer an SDK for each supported language giving developers a defined framework to work within. But this places the onus on the developer to learn how to use each particular framework and restricts their ability to download environmental dependencies that they may require. In this session we will review how we have been able to circumvent the need for various SDK's and instead allow users to upload their entire virtual machine (container) into the platform. This approach allows developers to use any operating system, runtime language, and supportive dependencies that they need while leaving the platform at large entirely agnostic to these developer preferences.",
  "Visualizing your results accurately can reveal hidden insights, catch errors, and inspire your audience to investigate further. During this workshop, we’ll cover types of data visualizations and when they’re most effective, different Javascript charting libraries such as D3, Google Charts, and Dygraphs, and how to get started on a simple dashboard.",
  "Like Boston streets at the height of the Big Dig, the world of containers can seem a tangle of construction and one-way streets. Many turns can be taken, but reaching the destination of container adoption can improve your application architecture, deployment, scalability, cost, and more. In this session, we'll update our navigation systems with the latest maps of container options in and around Azure (Docker, Kubernetes, ACI, AKS, ACR, App Service, etc.) to learn why these roads exist and help you swiftly arrive at success!",
  "This session will review various CSS display and layout properties along with their intended uses and frustrating nuances. We will cover and share implementations for using flexbox, CSS grids, floats and positioning elements with CSS.",
  "The gross world national product has been hovering around 3.5 percent for the last decade. Therefore, many companies are trying to derive new business from the current data that they have. How can a company consolidate data in one central place to allow for data exploration and business intelligence?",
  "The solution to this problem is to design a modern data platform. In this talk, I will be talking about two A.D.F. design patterns that can be used to achieve this goal. You will learn about how to combine components like Azure Data Lake Storage, Azure Data Lake Analytics, Azure Data Factory, Azure SQL server, Azure Analysis Services, Machine Learning and Power BI into an architecture that meets your company’s needs. Of course, we will go over how to use nomenclature to keep track of source systems and lineage within your data lake. We do not want any data swamps! At the end of the session you will have a good understanding on how linked services, data sets, pipelines and triggers play a role in Azure Data Factory.",
  "IdentityServer is a popular open source security token service framework written in ASP.NET Core that implements the OpenID Connect and OAuth2 protocols. It is used to authenticate users via single sign-on and to secure web APIs. It is designed for extensibility and customization and allows applications to satisfy their custom security requirements for single sign-in and API security. It can be used stand-alone or in conjunction with other identity providers (such as Google, Facebook, AAD, ADFS, Auth0, and others). Come to this session to be introduced to the basics of using, hosting, and configuring IdentityServer to secure your applications and APIs.",
  "Python is the hottest development language because it is so powerful. Django is a popular complete web development platform based on Python. In this presentation, you’ll learn the core principles of the Django framework from end to end via code examples, so you’ll have what you need to get started. Django comes with a complete security application built-in and dynamically generates CRUD forms for any database objects you define to the Object Relational Mapper (ORM). I discovered Django when I was looking for the ultimate open source web development framework and I found it. I think you will agree!",
  "We'll explore the wealth of open source available in the Windows Community Toolkit and the Windows Universal Samples repositories in GitHub that will make solving the hard problems easy when it comes to getting rolling with your Windows 10 project.",
  "Getting started with AI technologies can seem daunting. We can make it at least a little easier with the more comfortable confines of web technology and javascript by using the new Tensorflow.JS (formerly Deeplearn.js) framework. This lets us both train and evaluate models within the context of a web browser. The technology is extremely cross-platform and maybe a little easier to learn for many developers who do not do scientific computing with Python!",
  "In this talk, you’ll learn how to create and use machine learning models in your browser, all as part of a React-based app.",
  "Participants will come away with real code and techniques they can use to get their hands dirty with machine learning and hopefully the inspiration to do so!",
  "Null references have been called 'The Billion Dollar Mistake'. NullReferenceException is by far the most common error in .NET programs. Null references require more checks, more guard clauses, and yet they still cause issues from prototype to production. C# 8 contains features that provide static analysis on all reference variables to ensure you didn't accidentally miss checking. In this session we'll explore the proposed nullable reference types. You'll learn the thinking behind the design for the feature. You'll be ready to adopt these new types into your own code, and how to express designs where its clear when null is or isn't valid. Prepare yourself for a world where you can say 'When I learned C#, we had to check for null references by hand!'",
  "You can build amazing user experiences with modern web technology, but to make it useful you almost always need to call web services. Many of these services, such as the Microsoft Graph and custom Web APIs, require an Azure AD access token. That sounds easy, but it's often very confusing to developers who are new to it. Other web services need only an API key, which is easily stolen by anyone who knows how to use the browser's developer tools.",
  "In this session you'll learn the essentials for using Azure AD from your browser-based code. You'll learn about the different Azure AD endpoints - a point of confusion for sure - and when to use them. Then for each one, you'll learn how to register your client application and how to get that all important access token. As a bonus, you'll learn how to create your own Azure AD secured services and use an Azure Function Proxy to hide API keys for other services so they use Azure AD instead of an easily copied key value.",
  "Don't miss this quick, practical session that will get you consuming Azure AD web services in no time!",
  "Azure Sphere is finally here and ready for you to start developing. We will take a look at the device and understand the hardware. Then we will connect the devices to the Azure cloud and see what it takes to build an IoT-based application.",
  "Are you stuck in your existing job for years? Do you feel you need to get out, try either a new company or a new role or even a new boss? Then, this very entertaining, informative and highly interactive session is perfect for you. I assure you that you'll walk out of it totally reassured and enlightened. In this session I'll share personal and some real-life stories. You’ll learn techniques for finding new opportunities in a competitive job market. I’ll also share how to exploit the social media to your advantage. (They are not bad if used judiciously) What can you do once you get that rare and elusive interview? There are several things we need to take care of like, overall appearance, food habits, arrival, sitting posture, small talk or ice-breakers and humor. The most important parts of the limited interviewing opportunities are closing and follow up. I’ll share my own experience and notes from the field. You will also learn the importance of interview logs. Never stop looking!",
  "Power BI is Microsoft's reporting tool of choice. It is easy to get started, you can develop visually rich and interactive reports. You can connect to multitude of data sources. You can add summarization, complex calculations and conditional logic to your reports. These reports can be distributed to both internal and external customers. Power BI features are always expanding and more data sources are added, literally every month. Lets take a quick tour!",
  "As an end user, there's nothing more satisfying than a well crafted design. As a developer, this often takes knowledge, forethought, and work to achieve. We'll go over some fundamental design principles and frameworks, and then build some guidelines and strategies for designing exceptional interfaces and experiences. UI skills are easily transferred across organizations and tech stacks and allow you and your company's products to stand out and deliver value.",
  "Most web sites are built with some sort of JS framework, such as React or Angular, but how those frameworks work internally often isn’t very well understood. This talk goes through the process of building a minimal replacement for React from scratch, covering how JavaScript interacts with the DOM, and how simple many of the features actually are to implement.",
  "By the end of the talk, there will be a work version of code that can replace React, and allows the official React tutorial to run un-touched. The majority of code will be built-up interactively from pre-written snippets (usually 2-8 lines each), but the final changes needed to add state management will be covered with slides, as they contain multiple small changes that would be tedious to make live.",
  "Attendee Take-Away People coming to the talk will have a clear picture of simple DOM manipulation from JavaScript, and how that can be structured to allow code re-use.",
  "Are you getting started with containers in Azure? Do you have a single container workload (for example: a website or webapi that uses a database)? Have you put all the pieces of the puzzle together yet to determine what products in Azure are needed for your solution? In this session I will cover a few scenarios for getting web sites (that are docker containers) in Azure - including: - Azure Container Registry - App Service on Linux - Web App for Containers - Azure Container Instances The premise for this talk is running simple containers in Azure (not multi node systems that need Kubernetes or anything like that). I've got several demos to show you the different Azure products and some pros/cons for when you would use them.",
  "ASP.NET Identity provides a framework for storing and managing user data and passwords, and there are templates in Visual Studio to get started using it. Unfortunately, many of the defaults in ASP.NET Identity, and the templates that Visual Studio generate aren’t sufficient for every scenario you will face building a real-world application. This session will show techniques to improve the behavior of ASP.NET Identity and provide you the control to improve the security of your users’ identity and credentials.",
  "What is CosmosDB and why should I care about it? It is a schema-less JSON documents database engine with rich SQL querying capabilities. We will go over Cosmos database, collections, documents creation, and stored procedures. CosmosDB's SQL API supports relational and hierarchical queries. Azure CosmosDB Emulator is a free tool which provides local development with CosmosDB without connecting to the Azure portal. We will go over Data Migration Tool to import data from different sources. This session will also cover CosmosDB Explorer in Public View. It can be used to access the database with read-only or read-write permissions without requiring access to Azure subscription.",
  "Being a developer is not just about writing code - that code must actually work and figuring out why it doesn't is a different mindset than writing it. Debugging is not a prescribed recipe, it is a necessary skill for any developer. While this ability is inevitably gained through experience, there are tips, tricks and techniques you can learn to level up your effectiveness as a programmer right now.",
  "For the novice, student or new-grad, this session takes you through the most common things you don't know yet.",
  "how to use breakpoints effectively (there's more to it than you think) what the heck step-into, step-over and step-out do how to view and manipulate runtime state how to use your environment's interactive terminal to interrogate",
  "your program what the stack is and how it contains a wealth of information the importance of Known Good Values (KGVs) in isolating a problem knowing where to start by being a good investigator",
  "This session saves you from all those stackoverflow.com downvotes and 'did you even debug this?' comments. Bring a laptop and play along! Your browser tools are enough to try out many of the presented concepts.",
  "WebAssembly has huge implications for the web— it provides a way to run code written in multiple languages on the web at near-native speed, with client apps running on the web that previously couldn’t have done so François Tanguay, CEO at nventive, will discuss how to build rich apps with WebAssembly and present UNO Platform, a new UI framework that compiles and runs C# code that allows for the creation of rich UI apps that can target mobile and web simultaneously. You will learn, in this talk, how to reuse .NET Standard application and C# code to make your applications run across all browsers and all OS with WASM. In this session, not only you will be able to see the magic happen in front of your very eyes, you will also learn how to create apps using C# and XAML that can work on WASM but also on iOS, Android, Windows.",
  "Is your team using Test-Driven Development, the Agile methodology, and maybe even functional programming, but still producing more bugs than you’d like? Would you like to know why? Larry has analyzed hundreds of defects that occurred in a real-world system and was so surprised by what he found that he wanted to share it at Code Camp. Come to hear causes that are more common -- and solutions that are more simple -- than you might have imagined.",
  "Create new business opportunities, improve existing systems and create new channels for your customers. Azure API Management is a turnkey solution for managing, securing, and analyzing APIs allowing you to monetize your existing data and services. APIs can be hosted anywhere, not just in Azure. During this session we will cover a brief introduction to API Management along with how to import and publish your first API. This will allow you to easily secure and protect your API from abuse and overuse using an API key along with IP filtering, quotas and rate limits.",
  "Most companies are faced with the ever-growing big data problem. It is estimated that there will be 40 zettabytes of new data generated between 2012 to 2020. See the computer world article for details. Most of this data will be generated by sensors and machines. However, only a small portion of the data is available for users. How can IT professionals help business lines gather and process data from various sources? There have been two schools of thought on how to solve this problem.",
  "Schema on write is represented by the traditional relational database. Raw data is ingested by an extract, transform and load (ETL) process. The data is stored in tables that enforce integrity and allow for quick retrieval.",
  "Only a small portion of the total data owned by the company resides in the database.",
  "Schema on read is represented by technologies such as Hadoop or PolyBase. These technologies assumed that data integrity was applied during the generation of the text files. The actual definition of the table is applied during the read operation. All data owned by the company can reside in simple storage. Today, we will learn how to stage data using Azure blob storage. This staged data can be ingested by both techniques.",
  "Join me for this session and I will show you how with just a few lines of code, you can make your applications much more resilient and reliable. With Polly, the .NET resilience framework, your application can easily tolerate transient faults and longer outages in remote systems or infrastructure. At the end of this hour you will know how to use all the features of Polly to make your application a rock solid piece of work. We’ll cover the reactive and proactive resilience strategies, starting with simple but very powerful retries and finishing with bulkhead isolation.",
  "Oh, and did I mention Polly is a .NET Standard library so it will work on any application you can think of! Join me for an hour, and your applications will never be the same.",
  "Threat modeling is a way of thinking about what could go wrong and how to prevent it. When it comes to building software, some software shops either skip the important step of threat modeling in secure software design or, they have tried threat modeling before but haven't quite figured out how to connect the threat models to real world software development and its priorities.",
  "Threat modeling should be part of your secure software design process. In this session we will look at some of the latest advances in threat modeling integrated with Agile Development processes by using User Stories and Abuser Stories. This process is iterative and meant to keep step with Agile Development practices. By enumerating Threats against User Stories / Abuser Stories, you are not threat modeling an entire/massive system, but going granular by enumerating threats against relevant user stories. Finally, you will see how this process facilitates the creation of multiple segues into Security Test Cases and Mitigation Plans. You will see how this process works with an automated approach to security test cases."
]

let conjunctions = ['and', 'in', 'at', 'a', 'of', 'is', 'this', 'when', 'will', 'to', 'the', 'with', 'for', 'be', 'that', 'it']

// remove punctuation and useless conjunctions
let formattedDescriptions = descriptions.map(description => {
  let formattedDescription = description.toLowerCase().replace(/[.,\/?–#!$'"%\^&\*;:{}=\-_`~()]/g, "").replace(/\band\b|\bin\b|\bat\b|\ba\b|\bof\b|\byour\b|\bis\b|\bthis\b|\bwhen\b|\bwill\b|\bto\b|\bthe\b|\bwith\b|\bfor\b|\bbe\b|\byour\b|\bthat\b|\bit\b/g, "").replace(/\s{2,}/g, " ").split(" ")
  return formattedDescription
})

// flatten the array of split descriptions
let finalWords = flatten(formattedDescriptions)

// total the number of words
let wordCounts = {}
finalWords.forEach(
  word => { 
    wordCounts[word] = (wordCounts[word] || 0) + 1 // wordCounts[word] || 0 returns
  }
)

// get it into a chartable data format
let wordData = []
Object.keys(wordCounts).forEach(function (key, index) {
  if (wordCounts[key] > 10 && key != '') {
    wordData.push({
      word: key,
      count: wordCounts[key]
    })
  }
})

let width = 750,
  height = 750

let svg = d3.select('#word-chart')
  .append('svg')
  .attr('viewBox', '0 0' + ' ' + width + ' ' + height)

let color = d3.scaleSequential(d3.interpolateYlGnBu).domain([0, 100])

let nodes = wordData

let simulation = d3.forceSimulation(wordData) // creates simulation
  .force('charge', d3.forceManyBody().strength(0.75)) // applies attraction or repelling force
  .force('center', d3.forceCenter(width / 2, height / 2)) // pulls points towards a center
  .force('collision', d3.forceCollide().radius(function (d) {
    return d.count + 15
  }))
  .on('tick', ticked)

let bubbles = svg.selectAll('.word-bubble')
  .data(wordData)
  .enter().append('g').attr('class', 'word-bubble')
  .append('circle')
  .attr('r', function (d) {
    return d.count
  })
  .style('fill', function (d, i) {
    return color(i)
  })

let labels = d3.selectAll('.word-bubble')
  .append('g')
  .attr('class', 'word-label')

let wordLabel = labels.append('text')
  .attr('x', function (d) {
    return d.x
  })
  .attr('y', function (d) {
    return d.y
  })
  .attr('dy', 4)
  .text(function (d) {
    return d.word
  })
  .attr('text-anchor', 'middle')
  .attr('class', 'word-label-text')

function ticked() {
  bubbles.attr('cx', function (d) {
    return d.x
  })
    .attr('cy', function (d) {
      return d.y
    })

  wordLabel.attr('x', function (d) {
    return d.x
  })
    .attr('y', function (d) {
      return d.y
    })

  bubbles.exit().remove()
  labels.exit().remove()
  wordLabel.exit().remove()
}

function flatten(array) {
  return array.reduce((acc, val) => acc.concat(val), [])
}

// DYGRAPHS
// add full date and convert values to numbers
d3.dsv(';', 'data/boston_weather_data.csv', function(d) {
  return {
    'FullDate': new Date(d.Year + '-' + d.Month + '-' + d.Day + ' ' +  d.Hour + ':' + d.Minute),
    'Temperature [2 m above gnd]': +d['Temperature  [2 m above gnd]']
  }
}).then(data => {
  let formattedData = data.map(d => {
    return [d['FullDate'], d['Temperature [2 m above gnd]']]
  })

  let g = new Dygraph(
    document.getElementById('dygraphs-example'),
    formattedData,
    {
      legend: 'always',
      animatedZooms: true,
      title: 'Boston Temperatures (1 week)',
      labels: ['Date', 'Temperature [2 m above gnd]'],
      color: '#d3b45b'
    })

  g.ready(function () {
    g.setAnnotations([
      {
        series: 'Temperature [2 m above gnd]',
        x: Date.parse('2018-10-20 14:00'),
        shortText: 'H',
        text: 'Hottest Day',
        cssClass: 'hottest-annotation',
        tickColor: '#dd3710'
      },
      {
        series: 'Temperature [2 m above gnd]',
        x: Date.parse('2018-10-22 7:00'),
        shortText: 'C',
        text: 'Coldest Day',
        cssClass: 'coldest-annotation',
        tickColor: '#29bac1'
      }
    ])
  })
})


