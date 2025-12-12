import { LikesCount } from "./LikesCount.js";

const likesCounter = new LikesCount()

likesCounter.increment(`user1`)
likesCounter.increment(`user2`)
likesCounter.increment(`user1`)
likesCounter.increment(`user1`)
likesCounter.increment(`user1`)
likesCounter.increment(`user1`)
likesCounter.increment(`user1`)
likesCounter.increment(`user1`)
likesCounter.increment(`user1`)


console.log(likesCounter)