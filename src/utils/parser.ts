
export const parseExpression = (expression: string): string => {
   try {
     
     return eval(expression).toString();
   } catch {
     return 'Error';
   }
 };
 