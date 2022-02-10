const initialState={
    products:[{
        "title": "3D User Interfaces with Java 3D",
        "isbn": "1884777902",
        "pageCount": 520,
        "publishedDate": { "$date": "2000-08-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barrilleaux.jpg",
        "longDescription": "3D User Interfaces with Java 3D is a practical guide for providing next-generation applications with 3D user interfaces for manipulation of in-scene objects. Emphasis is on standalone and web-based business applications, such as for online sales and mass customization, but much of what this book offers has broad applicability to 3D user interfaces in other pursuits such as scientific visualization and gaming.  This book provides an extensive conceptual framework for 3D user interface techniques, and an in-depth introduction to user interface support in the Java 3D API, including such topics as picking, collision, and drag-and-drop. Many of the techniques are demonstrated in a Java 3D software framework included with the book, which also provides developers with many general-purpose building blocks for constructing their own user interfaces.    Applications and their use of 3D are approached realistically. The book is geared towards sophisticated user interfaces for the \"everyday user\" who doesn't have a lot of time to learn another application--much less a complicated one--and an everyday computer system without exotic devices like head mounted displays and data gloves. Perhaps the best description of this book is: \"A roadmap from Java 3D to 'Swing 3D'.\"",
        "status": "PUBLISH",
        "authors": ["Jon Barrilleaux"],
        "categories": ["Java", "Computer Graphics"]
      },
      {
        "title": "Hibernate in Action",
        "isbn": "193239415X",
        "pageCount": 400,
        "publishedDate": { "$date": "2004-08-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer.jpg",
        "shortDescription": "\"2005 Best Java Book!\" -- Java Developer's Journal",
        "longDescription": "Hibernate practically exploded on the Java scene. Why is this open-source tool so popular  Because it automates a tedious task: persisting your Java objects to a relational database. The inevitable mismatch between your object-oriented code and the relational database requires you to write code that maps one to the other. This code is often complex, tedious and costly to develop. Hibernate does the mapping for you.    Not only that, Hibernate makes it easy. Positioned as a layer between your application and your database, Hibernate takes care of loading and saving of objects. Hibernate applications are cheaper, more portable, and more resilient to change. And they perform better than anything you are likely to develop yourself.    Hibernate in Action carefully explains the concepts you need, then gets you going. It builds on a single example to show you how to use Hibernate in practice, how to deal with concurrency and transactions, how to efficiently retrieve objects and use caching.    The authors created Hibernate and they field questions from the Hibernate community every day - they know how to make Hibernate sing. Knowledge and insight seep out of every pore of this book.",
        "status": "PUBLISH",
        "authors": ["Christian Bauer", "Gavin King"],
        "categories": ["Java"]
      },
      {
        "title": "Hibernate in Action (Chinese Edition)",
        "pageCount": 400,
        "publishedDate": { "$date": "1999-06-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer-cn.jpg",
        "status": "PUBLISH",
        "authors": ["Christian Bauer", "Gavin King"],
        "categories": ["Java"]
      },
      {
        "title": "Java Persistence with Hibernate",
        "isbn": "1932394885",
        "pageCount": 880,
        "publishedDate": { "$date": "2006-11-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer2.jpg",
        "shortDescription": "\"...this book is the ultimate solution. If you are going to use Hibernate in your application, you have no other choice, go rush to the store and get this book.\" --JavaLobby",
        "longDescription": "Persistence -- the ability of data to outlive an instance of a program -- is central to modern applications. Hibernate, the most popular Java persistence tool, provides automatic and transparent object/relational mapping so it's a snap to work with SQL databases in Java applications. Hibernate conforms to the new EJB 3.0 and Java Persistence 1.0 standards.    Java Persistence with Hibernate explores Hibernate by developing an application that ties together hundreds of individual examples. You'll immediately dig into the rich programming model of Hibernate 3.2 and Java Persistence, working through queries, fetching strategies, caching, transactions, conversations, and more. You'll also appreciate the well-illustrated discussion of best practices in database design, object/relational mapping, and optimization techniques.    In this revised edition of Manning's bestselling Hibernate in Action, authors Christian Bauer and Gavin King -- the founder of the Hibernate project -- cover Hibernate 3.2 in detail along with the EJB 3.0 and Java Persistence 1.0 standards.",
        "status": "PUBLISH",
        "authors": ["Christian Bauer", "Gavin King"],
        "categories": ["Java"]
      }],
      cart:[{
        "title": "Mobile Agents",
        "isbn": "1884777368",
        "pageCount": 320,
        "publishedDate": { "$date": "1997-03-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cockayne.jpg",
        "shortDescription": "Mobile Agents is the first book to give the reader the ability to create and use powerful mobile agents on the Internet.",
        "longDescription": "Mobile Agents is the first book to give the reader the ability to create and use powerful mobile agents on the Internet. The book presents the reality of today's agent technologies and the future that this technology promises. It teaches how to create and deploy the major mobile agent systems (Telescript, Agent Tcl, Ara, Aglets Workbench) and how to solve a variety of problems on the Internet. Each of the chapters was written in collaboration with the original developers of the agent systems.",
        "status": "PUBLISH",
        "authors": ["William R. Cockayne and Michael Zyda", "editors"],
        "categories": ["Internet"]
      }],
      currentBook:{
        "title": "Android in Action, Second Edition",
        "isbn": "1935182722",
        "pageCount": 592,
        "publishedDate": { "$date": "2011-01-14T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
        "shortDescription": "Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
        "longDescription": "When it comes to mobile apps, Android can do almost anything   and with this book, so can you! Android runs on mobile devices ranging from smart phones to tablets to countless special-purpose gadgets. It's the broadest mobile platform available.    Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
        "status": "DELIVERED",
        "authors": ["W. Frank Ableson", "Robi Sen"],
        "categories": ["Java"]
      },
      bookToBuy:{
        "title": "Android in Action, Second Edition",
        "isbn": "1935182722",
        "pageCount": 592,
        "publishedDate": { "$date": "2011-01-14T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
        "shortDescription": "Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
        "longDescription": "When it comes to mobile apps, Android can do almost anything   and with this book, so can you! Android runs on mobile devices ranging from smart phones to tablets to countless special-purpose gadgets. It's the broadest mobile platform available.    Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
        "status": "PUBLISH",
        "authors": ["W. Frank Ableson", "Robi Sen"],
        "categories": ["Java"]
      }
}
export default initialState