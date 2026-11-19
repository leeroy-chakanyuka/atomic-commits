/* ITS SQL intensive: three original 40-mark, written Oracle SQL papers.
 * Questions are self-marked against worked solutions; no auto-marking of SQL text.
 * Chapter 88 is reserved for this standalone SQL practice section.
 */
(function(){
  "use strict";
  const library=window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
  const questionSets=[
  [
    {
      "id": 1,
      "topic": "INNER JOIN + ORDER BY",
      "kind": "SQL writing",
      "marks": 5,
      "prompt": "Write an Oracle SQL query showing each PAID order ID, the customer's name and the order total. Show orders with totals over 500, highest total first.",
      "snippet": "CUSTOMERS(customer_id, full_name)\nORDERS(order_id, customer_id, status, total)",
      "snippetLanguage": "sql",
      "referenceNote": "Use Oracle-compatible SQL and only the tables/columns supplied. Equivalent valid solutions earn full marks.",
      "memo": "**One valid model solution:**\n\n```sql\nSELECT o.order_id, c.full_name, o.total\nFROM ORDERS o\nJOIN CUSTOMERS c ON c.customer_id = o.customer_id\nWHERE o.status = 'PAID' AND o.total > 500\nORDER BY o.total DESC;\n```\n\n**Marking guide (5):** 1 correct SELECT; 1 JOIN tables; 1 ON keys; 1 two WHERE predicates; 1 descending order. Equivalent correct Oracle SQL is acceptable."
    },
    {
      "id": 2,
      "topic": "LEFT JOIN + COUNT",
      "kind": "SQL writing",
      "marks": 5,
      "prompt": "List every department, including departments with no employees, and its employee count. Sort alphabetically by department name.",
      "snippet": "DEPARTMENTS(dept_id, dept_name)\nEMPLOYEES(emp_id, dept_id, full_name, salary)",
      "snippetLanguage": "sql",
      "referenceNote": "Use Oracle-compatible SQL and only the tables/columns supplied. Equivalent valid solutions earn full marks.",
      "memo": "**One valid model solution:**\n\n```sql\nSELECT d.dept_name, COUNT(e.emp_id) AS employee_count\nFROM DEPARTMENTS d\nLEFT JOIN EMPLOYEES e ON e.dept_id = d.dept_id\nGROUP BY d.dept_id, d.dept_name\nORDER BY d.dept_name;\n```\n\n**Marking guide (5):** 1 LEFT JOIN; 1 keys; 1 COUNT of right-hand ID; 1 GROUP BY; 1 ORDER BY. Equivalent correct Oracle SQL is acceptable."
    },
    {
      "id": 3,
      "topic": "GROUP BY / HAVING",
      "kind": "SQL writing",
      "marks": 5,
      "prompt": "Return product categories with at least 3 products costing more than 100 each. Include the category and average price for those qualifying products.",
      "snippet": "PRODUCTS(product_id, category, price)",
      "snippetLanguage": "sql",
      "referenceNote": "Use Oracle-compatible SQL and only the tables/columns supplied. Equivalent valid solutions earn full marks.",
      "memo": "**One valid model solution:**\n\n```sql\nSELECT category, ROUND(AVG(price),2) AS avg_price\nFROM PRODUCTS\nWHERE price > 100\nGROUP BY category\nHAVING COUNT(*) >= 3;\n```\n\n**Marking guide (5):** 1 SELECT AVG; 1 WHERE before grouping; 1 GROUP BY; 1 HAVING count; 1 correct semantics. Equivalent correct Oracle SQL is acceptable."
    },
    {
      "id": 4,
      "topic": "Correlated subquery",
      "kind": "SQL writing",
      "marks": 5,
      "prompt": "Show each employee's name and salary if they earn more than the average salary in their own department.",
      "snippet": "EMPLOYEES(emp_id, full_name, dept_id, salary)",
      "snippetLanguage": "sql",
      "referenceNote": "Use Oracle-compatible SQL and only the tables/columns supplied. Equivalent valid solutions earn full marks.",
      "memo": "**One valid model solution:**\n\n```sql\nSELECT e.full_name, e.salary\nFROM EMPLOYEES e\nWHERE e.salary > (\n  SELECT AVG(x.salary)\n  FROM EMPLOYEES x\n  WHERE x.dept_id = e.dept_id\n);\n```\n\n**Marking guide (5):** 1 outer SELECT; 1 scalar subquery; 1 AVG; 1 department correlation; 1 > comparison. Equivalent correct Oracle SQL is acceptable."
    },
    {
      "id": 5,
      "topic": "UNION and INTERSECT",
      "kind": "SQL writing",
      "marks": 5,
      "prompt": "Find unique student IDs who are present in either the CLUB_MEMBERS or SPORTS_MEMBERS tables. Then write a second query for students present in both.",
      "snippet": "CLUB_MEMBERS(student_id, club_id)\nSPORTS_MEMBERS(student_id, team_id)",
      "snippetLanguage": "sql",
      "referenceNote": "Use Oracle-compatible SQL and only the tables/columns supplied. Equivalent valid solutions earn full marks.",
      "memo": "**One valid model solution:**\n\n```sql\nSELECT student_id FROM CLUB_MEMBERS\nUNION\nSELECT student_id FROM SPORTS_MEMBERS;\n\nSELECT student_id FROM CLUB_MEMBERS\nINTERSECT\nSELECT student_id FROM SPORTS_MEMBERS;\n```\n\n**Marking guide (5):** 1 valid first SELECT; 1 UNION (not ALL); 1 compatible second SELECT; 1 INTERSECT; 1 two distinct correct result sets. Equivalent correct Oracle SQL is acceptable."
    },
    {
      "id": 6,
      "topic": "Oracle sequence / INSERT",
      "kind": "SQL writing",
      "marks": 5,
      "prompt": "Create an Oracle sequence called order_seq starting at 1000 and incrementing by 1. Insert one new order for customer 7 with total 250 using the next sequence value.",
      "snippet": "ORDERS(order_id, customer_id, total)",
      "snippetLanguage": "sql",
      "referenceNote": "Use Oracle-compatible SQL and only the tables/columns supplied. Equivalent valid solutions earn full marks.",
      "memo": "**One valid model solution:**\n\n```sql\nCREATE SEQUENCE order_seq START WITH 1000 INCREMENT BY 1;\n\nINSERT INTO ORDERS(order_id, customer_id, total)\nVALUES(order_seq.NEXTVAL, 7, 250);\n```\n\n**Marking guide (5):** 1 CREATE SEQUENCE; 1 START WITH; 1 INCREMENT BY; 1 column list / VALUES; 1 NEXTVAL. Equivalent correct Oracle SQL is acceptable."
    },
    {
      "id": 7,
      "topic": "PL/SQL anonymous block",
      "kind": "SQL writing",
      "marks": 5,
      "prompt": "Write an anonymous PL/SQL block that counts all employees in department 20 and prints that count using DBMS_OUTPUT.PUT_LINE.",
      "snippet": "EMPLOYEES(emp_id, dept_id, full_name)",
      "snippetLanguage": "sql",
      "referenceNote": "Use Oracle-compatible SQL and only the tables/columns supplied. Equivalent valid solutions earn full marks.",
      "memo": "**One valid model solution:**\n\n```sql\nDECLARE\n  v_count NUMBER;\nBEGIN\n  SELECT COUNT(*) INTO v_count\n  FROM EMPLOYEES\n  WHERE dept_id = 20;\n  DBMS_OUTPUT.PUT_LINE(v_count);\nEND;\n/\n```\n\n**Marking guide (5):** 1 DECLARE variable; 1 BEGIN/END; 1 SELECT COUNT INTO; 1 department filter; 1 output. Equivalent correct Oracle SQL is acceptable."
    },
    {
      "id": 8,
      "topic": "Cursor loop",
      "kind": "SQL writing",
      "marks": 5,
      "prompt": "Write an explicit PL/SQL cursor loop that prints each unpaid invoice ID. Include OPEN, FETCH, EXIT WHEN %NOTFOUND and CLOSE.",
      "snippet": "INVOICES(invoice_id, status, total)",
      "snippetLanguage": "sql",
      "referenceNote": "Use Oracle-compatible SQL and only the tables/columns supplied. Equivalent valid solutions earn full marks.",
      "memo": "**One valid model solution:**\n\n```sql\nDECLARE\n  CURSOR c_invoices IS SELECT invoice_id FROM INVOICES WHERE status='UNPAID';\n  v_id INVOICES.invoice_id%TYPE;\nBEGIN\n  OPEN c_invoices;\n  LOOP\n    FETCH c_invoices INTO v_id;\n    EXIT WHEN c_invoices%NOTFOUND;\n    DBMS_OUTPUT.PUT_LINE(v_id);\n  END LOOP;\n  CLOSE c_invoices;\nEND;\n/\n```\n\n**Marking guide (5):** 1 cursor and variable; 1 OPEN; 1 FETCH INTO; 1 EXIT WHEN %NOTFOUND; 1 output and CLOSE. Equivalent correct Oracle SQL is acceptable."
    }
  ],
  [
    {
      "id": 1,
      "topic": "SELF JOIN",
      "kind": "SQL writing",
      "marks": 5,
      "prompt": "List employee names alongside their manager's name; show even employees who do not have a manager.",
      "snippet": "EMPLOYEES(emp_id, full_name, manager_id)",
      "snippetLanguage": "sql",
      "referenceNote": "Use Oracle-compatible SQL and only the tables/columns supplied. Equivalent valid solutions earn full marks.",
      "memo": "**One valid model solution:**\n\n```sql\nSELECT e.full_name AS employee, m.full_name AS manager\nFROM EMPLOYEES e\nLEFT JOIN EMPLOYEES m ON m.emp_id = e.manager_id;\n```\n\n**Marking guide (5):** 1 two aliases same table; 1 LEFT JOIN; 1 correct key matching; 1 both names selected; 1 preserves employees with no manager. Equivalent correct Oracle SQL is acceptable."
    },
    {
      "id": 2,
      "topic": "NOT EXISTS",
      "kind": "SQL writing",
      "marks": 5,
      "prompt": "List customers who have never placed an order. Use NOT EXISTS rather than NOT IN.",
      "snippet": "CUSTOMERS(customer_id, full_name)\nORDERS(order_id, customer_id, total)",
      "snippetLanguage": "sql",
      "referenceNote": "Use Oracle-compatible SQL and only the tables/columns supplied. Equivalent valid solutions earn full marks.",
      "memo": "**One valid model solution:**\n\n```sql\nSELECT c.customer_id, c.full_name\nFROM CUSTOMERS c\nWHERE NOT EXISTS (\n  SELECT 1 FROM ORDERS o\n  WHERE o.customer_id = c.customer_id\n);\n```\n\n**Marking guide (5):** 1 outer query; 1 NOT EXISTS; 1 SELECT inside; 1 correlated IDs; 1 customers with zero orders. Equivalent correct Oracle SQL is acceptable."
    },
    {
      "id": 3,
      "topic": "ALL subquery",
      "kind": "SQL writing",
      "marks": 5,
      "prompt": "Return products more expensive than every product in category 'BUDGET'. Use > ALL (not MAX).",
      "snippet": "PRODUCTS(product_id, product_name, category, price)",
      "snippetLanguage": "sql",
      "referenceNote": "Use Oracle-compatible SQL and only the tables/columns supplied. Equivalent valid solutions earn full marks.",
      "memo": "**One valid model solution:**\n\n```sql\nSELECT product_id, product_name, price\nFROM PRODUCTS\nWHERE price > ALL (\n  SELECT price FROM PRODUCTS WHERE category='BUDGET'\n);\n```\n\n**Marking guide (5):** 1 output; 1 > ALL syntax; 1 subquery; 1 correct category predicate; 1 valid closing and logic. Equivalent correct Oracle SQL is acceptable."
    },
    {
      "id": 4,
      "topic": "MINUS / set difference",
      "kind": "SQL writing",
      "marks": 5,
      "prompt": "List student IDs who registered for a course but did not submit any assessment. Use Oracle MINUS.",
      "snippet": "REGISTRATIONS(student_id, course_id)\nSUBMISSIONS(student_id, assessment_id)",
      "snippetLanguage": "sql",
      "referenceNote": "Use Oracle-compatible SQL and only the tables/columns supplied. Equivalent valid solutions earn full marks.",
      "memo": "**One valid model solution:**\n\n```sql\nSELECT student_id FROM REGISTRATIONS\nMINUS\nSELECT student_id FROM SUBMISSIONS;\n```\n\n**Marking guide (5):** 1 registration SELECT; 1 MINUS; 1 submission SELECT; 1 matching column type/shape; 1 correct direction. Equivalent correct Oracle SQL is acceptable."
    },
    {
      "id": 5,
      "topic": "CREATE VIEW",
      "kind": "SQL writing",
      "marks": 5,
      "prompt": "Create a view department_payroll showing department ID and total salary per department. Then query only departments with payroll over 100000.",
      "snippet": "EMPLOYEES(emp_id, dept_id, salary)",
      "snippetLanguage": "sql",
      "referenceNote": "Use Oracle-compatible SQL and only the tables/columns supplied. Equivalent valid solutions earn full marks.",
      "memo": "**One valid model solution:**\n\n```sql\nCREATE VIEW department_payroll AS\nSELECT dept_id, SUM(salary) AS total_salary\nFROM EMPLOYEES\nGROUP BY dept_id;\n\nSELECT dept_id, total_salary\nFROM department_payroll\nWHERE total_salary > 100000;\n```\n\n**Marking guide (5):** 1 CREATE VIEW AS; 1 SUM; 1 GROUP BY; 1 SELECT from view; 1 filter result. Equivalent correct Oracle SQL is acceptable."
    },
    {
      "id": 6,
      "topic": "BEFORE UPDATE trigger",
      "kind": "SQL writing",
      "marks": 5,
      "prompt": "Write a row-level Oracle trigger that prevents a product price from being set below zero. Raise an application error for invalid updates.",
      "snippet": "PRODUCTS(product_id, price)\nOracle :NEW.price and RAISE_APPLICATION_ERROR are available.",
      "snippetLanguage": "sql",
      "referenceNote": "Use Oracle-compatible SQL and only the tables/columns supplied. Equivalent valid solutions earn full marks.",
      "memo": "**One valid model solution:**\n\n```sql\nCREATE OR REPLACE TRIGGER trg_price_check\nBEFORE UPDATE OF price ON PRODUCTS\nFOR EACH ROW\nBEGIN\n  IF :NEW.price < 0 THEN\n    RAISE_APPLICATION_ERROR(-20001, 'Price cannot be negative');\n  END IF;\nEND;\n/\n```\n\n**Marking guide (5):** 1 CREATE TRIGGER; 1 BEFORE UPDATE OF; 1 FOR EACH ROW; 1 :NEW condition; 1 error and END. Equivalent correct Oracle SQL is acceptable."
    },
    {
      "id": 7,
      "topic": "Stored procedure",
      "kind": "SQL writing",
      "marks": 5,
      "prompt": "Create a procedure raise_salary(p_emp_id IN NUMBER, p_amount IN NUMBER) which adds p_amount to one employee's salary.",
      "snippet": "EMPLOYEES(emp_id, salary)",
      "snippetLanguage": "sql",
      "referenceNote": "Use Oracle-compatible SQL and only the tables/columns supplied. Equivalent valid solutions earn full marks.",
      "memo": "**One valid model solution:**\n\n```sql\nCREATE OR REPLACE PROCEDURE raise_salary(\n  p_emp_id IN NUMBER, p_amount IN NUMBER\n) AS\nBEGIN\n  UPDATE EMPLOYEES\n  SET salary = salary + p_amount\n  WHERE emp_id = p_emp_id;\nEND;\n/\n```\n\n**Marking guide (5):** 1 procedure signature; 1 parameter modes/types; 1 BEGIN/END; 1 salary update; 1 targeted WHERE. Equivalent correct Oracle SQL is acceptable."
    },
    {
      "id": 8,
      "topic": "Debugging SQL",
      "kind": "Debugging SQL",
      "marks": 5,
      "prompt": "Correct the faulty query so that it returns departments with more than five employees. Explain the central mistake.",
      "snippet": "EMPLOYEES(emp_id, dept_id, salary)\n\nFaulty SQL:\nSELECT dept_id, COUNT(*) FROM EMPLOYEES\nWHERE COUNT(*) > 5\nGROUP BY dept_id;",
      "snippetLanguage": "sql",
      "referenceNote": "Use Oracle-compatible SQL and only the tables/columns supplied. Equivalent valid solutions earn full marks.",
      "memo": "**One valid model solution:**\n\n```sql\nSELECT dept_id, COUNT(*) AS headcount\nFROM EMPLOYEES\nGROUP BY dept_id\nHAVING COUNT(*) > 5;\n\n-- WHERE filters rows before grouping; HAVING filters groups.\n```\n\n**Marking guide (5):** 1 removing invalid aggregate WHERE; 1 GROUP BY; 1 HAVING COUNT; 1 predicate > 5; 1 correct WHERE vs HAVING explanation. Equivalent correct Oracle SQL is acceptable."
    }
  ],
  [
    {
      "id": 1,
      "topic": "Three-table JOIN + HAVING",
      "kind": "SQL writing",
      "marks": 5,
      "prompt": "List customer names and the total value of their PAID order items, showing only customers whose paid items sum to more than 1000.",
      "snippet": "CUSTOMERS(customer_id, full_name)\nORDERS(order_id, customer_id, status)\nORDER_ITEMS(order_id, quantity, unit_price)",
      "snippetLanguage": "sql",
      "referenceNote": "Use Oracle-compatible SQL and only the tables/columns supplied. Equivalent valid solutions earn full marks.",
      "memo": "**One valid model solution:**\n\n```sql\nSELECT c.customer_id, c.full_name,\n       SUM(i.quantity * i.unit_price) AS paid_total\nFROM CUSTOMERS c\nJOIN ORDERS o ON o.customer_id = c.customer_id\nJOIN ORDER_ITEMS i ON i.order_id = o.order_id\nWHERE o.status='PAID'\nGROUP BY c.customer_id, c.full_name\nHAVING SUM(i.quantity * i.unit_price) > 1000;\n```\n\n**Marking guide (5):** 1 both joins; 1 join conditions; 1 paid WHERE; 1 correct SUM/GROUP BY; 1 HAVING. Equivalent correct Oracle SQL is acceptable."
    },
    {
      "id": 2,
      "topic": "Correlated EXISTS",
      "kind": "SQL writing",
      "marks": 5,
      "prompt": "Find courses with at least one student scoring 80 or above on an assessment. Do not return a course more than once.",
      "snippet": "COURSES(course_id, course_name)\nASSESSMENTS(assessment_id, course_id)\nMARKS(student_id, assessment_id, score)",
      "snippetLanguage": "sql",
      "referenceNote": "Use Oracle-compatible SQL and only the tables/columns supplied. Equivalent valid solutions earn full marks.",
      "memo": "**One valid model solution:**\n\n```sql\nSELECT c.course_id, c.course_name\nFROM COURSES c\nWHERE EXISTS (\n  SELECT 1\n  FROM ASSESSMENTS a\n  JOIN MARKS m ON m.assessment_id=a.assessment_id\n  WHERE a.course_id=c.course_id\n    AND m.score >= 80\n);\n```\n\n**Marking guide (5):** 1 outer courses SELECT; 1 EXISTS; 1 correct join; 1 correlation; 1 >=80 and no duplicates. Equivalent correct Oracle SQL is acceptable."
    },
    {
      "id": 3,
      "topic": "Date filtering + GROUP BY",
      "kind": "SQL writing",
      "marks": 5,
      "prompt": "Calculate total PAID payments per customer for November 2026 only. Include customers with a payment total over 500.",
      "snippet": "PAYMENTS(payment_id, customer_id, amount, status, paid_at DATE)",
      "snippetLanguage": "sql",
      "referenceNote": "Use Oracle-compatible SQL and only the tables/columns supplied. Equivalent valid solutions earn full marks.",
      "memo": "**One valid model solution:**\n\n```sql\nSELECT customer_id, SUM(amount) AS amount_paid\nFROM PAYMENTS\nWHERE status='PAID'\n  AND paid_at >= DATE '2026-11-01'\n  AND paid_at < DATE '2026-12-01'\nGROUP BY customer_id\nHAVING SUM(amount) > 500;\n```\n\n**Marking guide (5):** 1 SUM; 1 paid filter; 1 inclusive/exclusive date range; 1 GROUP BY; 1 HAVING. Equivalent correct Oracle SQL is acceptable."
    },
    {
      "id": 4,
      "topic": "Outer JOIN + missing rows",
      "kind": "SQL writing",
      "marks": 5,
      "prompt": "Find students who have not registered for any module. Use LEFT JOIN and IS NULL, not NOT EXISTS.",
      "snippet": "STUDENTS(student_id, full_name)\nREGISTRATIONS(student_id, module_id)",
      "snippetLanguage": "sql",
      "referenceNote": "Use Oracle-compatible SQL and only the tables/columns supplied. Equivalent valid solutions earn full marks.",
      "memo": "**One valid model solution:**\n\n```sql\nSELECT s.student_id, s.full_name\nFROM STUDENTS s\nLEFT JOIN REGISTRATIONS r ON r.student_id=s.student_id\nWHERE r.student_id IS NULL;\n```\n\n**Marking guide (5):** 1 correct left side; 1 LEFT JOIN; 1 ON key; 1 IS NULL on right key; 1 no accidental inner join. Equivalent correct Oracle SQL is acceptable."
    },
    {
      "id": 5,
      "topic": "Subquery with aggregate",
      "kind": "SQL writing",
      "marks": 5,
      "prompt": "Find every invoice whose amount is greater than the overall average invoice amount. Include ID and amount, highest first.",
      "snippet": "INVOICES(invoice_id, amount, status)",
      "snippetLanguage": "sql",
      "referenceNote": "Use Oracle-compatible SQL and only the tables/columns supplied. Equivalent valid solutions earn full marks.",
      "memo": "**One valid model solution:**\n\n```sql\nSELECT invoice_id, amount\nFROM INVOICES\nWHERE amount > (SELECT AVG(amount) FROM INVOICES)\nORDER BY amount DESC;\n```\n\n**Marking guide (5):** 1 select; 1 scalar subquery; 1 AVG; 1 > comparison; 1 ORDER BY DESC. Equivalent correct Oracle SQL is acceptable."
    },
    {
      "id": 6,
      "topic": "Secure dynamic SQL",
      "kind": "SQL writing",
      "marks": 5,
      "prompt": "In PL/SQL, execute a parameterized UPDATE to add p_amount to salary of employee p_emp_id using EXECUTE IMMEDIATE and binds.",
      "snippet": "EMPLOYEES(emp_id, salary)\nPL/SQL parameters p_amount and p_emp_id already exist.",
      "snippetLanguage": "sql",
      "referenceNote": "Use Oracle-compatible SQL and only the tables/columns supplied. Equivalent valid solutions earn full marks.",
      "memo": "**One valid model solution:**\n\n```sql\nBEGIN\n  EXECUTE IMMEDIATE\n    'UPDATE EMPLOYEES SET salary = salary + :amt WHERE emp_id = :id'\n    USING p_amount, p_emp_id;\nEND;\n/\n```\n\n**Marking guide (5):** 1 EXECUTE IMMEDIATE; 1 SQL literal; 1 bind :amt; 1 bind :id; 1 correct USING order. Equivalent correct Oracle SQL is acceptable."
    },
    {
      "id": 7,
      "topic": "PL/SQL exception handling",
      "kind": "SQL writing",
      "marks": 5,
      "prompt": "Write a PL/SQL block that reads salary for employee 42 into a variable and prints it. If no employee exists, print 'Not found'.",
      "snippet": "EMPLOYEES(emp_id, salary)",
      "snippetLanguage": "sql",
      "referenceNote": "Use Oracle-compatible SQL and only the tables/columns supplied. Equivalent valid solutions earn full marks.",
      "memo": "**One valid model solution:**\n\n```sql\nDECLARE\n  v_salary EMPLOYEES.salary%TYPE;\nBEGIN\n  SELECT salary INTO v_salary FROM EMPLOYEES WHERE emp_id=42;\n  DBMS_OUTPUT.PUT_LINE(v_salary);\nEXCEPTION\n  WHEN NO_DATA_FOUND THEN\n    DBMS_OUTPUT.PUT_LINE('Not found');\nEND;\n/\n```\n\n**Marking guide (5):** 1 variable; 1 SELECT INTO; 1 filter; 1 EXCEPTION WHEN NO_DATA_FOUND; 1 output and block syntax. Equivalent correct Oracle SQL is acceptable."
    },
    {
      "id": 8,
      "topic": "Integrated DDL / SQL / PL-SQL",
      "kind": "SQL writing",
      "marks": 5,
      "prompt": "Create a view of each student's total marks, then select those with totals over 200. Use the student ID and SUM(score).",
      "snippet": "MARKS(student_id, assessment_id, score)",
      "snippetLanguage": "sql",
      "referenceNote": "Use Oracle-compatible SQL and only the tables/columns supplied. Equivalent valid solutions earn full marks.",
      "memo": "**One valid model solution:**\n\n```sql\nCREATE VIEW student_totals AS\nSELECT student_id, SUM(score) AS total_marks\nFROM MARKS\nGROUP BY student_id;\n\nSELECT student_id, total_marks\nFROM student_totals\nWHERE total_marks > 200;\n```\n\n**Marking guide (5):** 1 CREATE VIEW; 1 SUM score; 1 GROUP BY; 1 SELECT view; 1 WHERE >200. Equivalent correct Oracle SQL is acceptable."
    }
  ]
];
  const titles=["Core SQL and PL/SQL","Applied SQL and Database Objects","Exam-Style SQL Challenge"];
  questionSets.forEach((questions,i)=>{
    const session=i+1;
    if(questions.length!==8||questions.some((q,j)=>q.id!==j+1||q.marks!==5)) throw new Error("Invalid SQL-only session "+session);
    library["its-88-"+session]={
      module:"ITS",moduleName:"Information Systems 3",chapter:88,
      title:"SQL Intensive: "+titles[i],session,version:1,
      limitSeconds:1800,totalMarks:40,
      source:"Original Oracle SQL practice problems for ITS Chapter 8: Advanced SQL. Not official CPUT exam questions.",
      intro:"Eight written Oracle SQL and PL/SQL problems: 40 marks in 30 minutes. Write your SQL before checking the worked solutions and marking rubric.",
      notice:"No multiple-choice shortcuts. Model answers unlock after submission. Mark written SQL yourself: equivalent correct queries are accepted.",
      questions
    };
  });
})();