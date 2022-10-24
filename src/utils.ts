export const calculateTime = (name: string, startTime: number) => {
    const stop = Date.now();
    console.log(`Time Taken to execute ${name} = ${(stop - startTime)/1000} seconds`);
}
