## What are the differences between memory reference instructions and non-memory reference instructions?

I hope you’ll grin when you read this 10,000-foot answer:

A “memory reference instruction” references one or more memory locations.
A “non-memory reference instruction” does not reference any memory locations.
Seriously, though…

When we talk about memory, at this level, we’re talking about RAM (or ROM or their various equivalents, including NVRAM, EPROM, EEPROM, etc.).

Why it’s important to differentiate between these two categories of instructions?

In most architectures, executing a memory reference instruction requires one or more additional machine cycles to retrieve data from or store data into one or more memory locations. How many extra machine cycles and how much data is actually transferred depends on a combination of the specific instruction, the width of the external data bus, and other factors.

Now, a memory reference instruction might not have to go all the way out to memory, because the data it requires might already be in cache. But there’s no guarantee of that, at any given moment, so the instruction is still considered a memory reference instruction, even if it happens to find what it needs in cache.

A non-memory reference instruction doesn’t need to reach out to memory. For example, an instruction that transfers data between two CPU registers doesn’t involve memory at all. These instructions, in most architectures, can execute more quickly, because they don’t have to reach out to memory to complete their work.

Note that fetching the instruction itself from memory obviously requires accessing one or more memory locations. That happens for all machine instructions, no matter what kind of instruction you’re dealing with. (And, yes, the next instruction you fetch might already be sitting in the cache.)

This explanation is overly simplified, but should give you the general idea.

> Source: https://qr.ae/pGqwG2
