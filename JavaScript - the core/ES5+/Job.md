# Job 
Some operations can be postponed, and executed as soon as there is an available spot on the execution context stack.

> **Job**: A job is an abstract operation that initiates an ECMAScript computation when no other ECMAScript computation is currently in progress.

Jobs are enqueued on the **_job queues_**, and in current spec version there are two job queues: **_ScriptJobs_**, and **_PromiseJobs_**.

> **And initial job on the ScriptJobs queue is the main entry point to our program — initial script which is loaded 
> and evaluated: a realm is created, a global context is created and is associated with this realm, it’s pushed onto the stack, and the global code is executed.**

Notice, the _ScriptJobs_ queue manages both, _scripts_ and _modules_.

Further this context can execute other contexts, or enqueue other _jobs_. An example of a job which can be spawned and enqueued is a _promise_.

When there is _no running_ execution context and the execution context stack is _empty_, the ECMAScript implementation removes the first _pending job_ from a job queue, creates an execution context and starts its execution.

> **Note**: the job queues are usually handled by the abstraction known as the **_“Event loop”_**. ECMAScript standard 
> doesn’t specify the event loop, leaving it up to implementations.

```js
// Enqueue a new promise on the PromiseJobs queue.
new Promise(resolve => setTimeout(() => resolve(10), 0))
  .then(value => console.log(value));
 
// This log is executed earlier, since it's still a
// running context, and job cannot start executing first
console.log(20);
 
// Output: 20, 10
```
The **_async functions_** can await for promises, so they also enqueue promise jobs:

```js
async function later() {
  return await Promise.resolve(10);
}
 
(async () => {
  let data = await later();
  console.log(data); // 10
})();
 
// Also happens earlier, since async execution
// is queued on the PromiseJobs queue.
console.log(20);
 
// Output: 20, 10
```

Now we’re very close to the final picture of the current JS Universe. We shall see now _main owners_ of all those components we discussed, the _Agents_.

