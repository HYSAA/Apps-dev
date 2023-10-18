function fetchData() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const data = 'This is some data';
            resolve(data);
          }, 1000);
        });
      }
      
      async function processData() {
        try {
          const data = await fetchData();
          console.log('Data received: ' + data);
        } catch (error) {
          console.error('Error: ' + error);
        }
      }
      
      processData();
      