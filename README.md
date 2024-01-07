# SNOW-Interview-Qs

Important Concepts

Done:

1. What is full form of CMDB and what is it?

CMDB stands for Configuration Management Database. CMDB is a repository. It acts as a data warehouse for information technology installations. It holds data related to a collection of IT assets, and descriptive relationships between such assets.

4. What is LDAP Integration and its use?    [LDAP]

LDAP is Light weight Directory Access Protocol. You can use it for user data population and user authentication. ServiceNow integrates with LDAP directory to streamline the user log in process and to automate the creation of user and assigning them roles.

To be Done:

1. What are dictionary overrides?

Dictionary overrides provide the ability to define a field on an extended table differently from the field on the parent table. For example, for a field on the Task [task] table, a dictionary override can change the default value on the Incident [incident] table without affecting the default value on Task [task] or Change [change].

2. What do you mean by coalesce?
The field property that is used in transform map field mapping is known as Coalesce. Coalescing on a field allows you to use that field as a unique key. The existing record will get updated with the imported information if a match with the coalesce field is found. If you can’t find a match, then insertion of a new record into the database will take place.

5. What do you mean by data lookup and record matching?

Data lookup and record matching feature helps to set a field value based on some condition instead of writing scripts.

6. What is CMDB Baseline?

CMDB Baselines will help you, understand and control the changes made to a configuration Item(CI). These Baselines act as a snapshot of a CI.

7. How to enable or disable an application in ServiceNow?

Following steps will help you do the same:

Navigate to “Application Menus” module
Open the respective application.
Set value for active as ‘true’ to enable it or set it to ‘false’ to disable it.

8. What is a view?

View defines the arrangement of fields on a form or a list. For one single form we can define multiple views according to the user preferences or requirement.

9. What is an ACL

An ACL is access control list that defines what data users can access and how they can access it in ServiceNow.

10. What do you mean by impersonating a user? How it is useful?

Impersonating a user means giving the administrator  access to what the user would have access to. This includes the same menus and modules. ServiceNow records the administrator activities when the user impersonates another user. This feature helps in testing. You can impersonate that user and can test instead of logging out from your session and logging again with the user credentials.

11. What are dictionary overrides?

Dictionary overrides provide the ability to define a field on an extended table differently from the field on the parent table. For example, for a field on the Task [task] table, a dictionary override can change the default value on the Incident [incident] table without affecting the default value on Task [task] or Change [change].

12. What do you mean by coalesce?

Coalesce is a property of a field that we use in transform map field mapping. Coalescing on a field (or set of fields) lets you use the field as a unique key. If a match is found using the coalesce field, the existing record will be updated with the information being imported. If a match is not found, then a new record will be inserted into the database

13. What are UI policies?

UI policies dynamically change information on a form and control custom process flows for tasks. UI policies are alternative to client scripts. You can use UI policies to set mandatory fields,which are read only and visible on a form. You can also use UI policy for dynamically changing a field on a form.

14. What is a data policy?

With data policies, you can enforce data consistency by setting mandatory and read-only states for fields. Data policies are similar to UI policies, but UI policies only apply to data entered on a form through the standard browser. Data policies can apply rules to all data entered into the system, including data brought in through email, import sets or web services and data entered through the mobile UI.

15. What is a client script?

Client script sits on the client side(the browser) and runs on client side only.Following are the types of client script:

OnLoad()
OnSubmit()
OnChange()
OncellEdit()

16. How can you cancel a form submission through client script?

In order to cancel a form submission the onSubmit function should return false. Refer the below mentioned syntax:

function onSubmit() { return false; }

17. What is a business rule?
Business rule is a server side script. It executes each time a record is inserted, updated, deleted, displayed or queried. The key thing to note while creating a business rule is, when and on what action it has to be executed. The business can be run or executed for following states

Display
Before
After


18. Can you call a business rule through a client script?
Yes, it is possible to call a business rule through a client script. You can use glide ajax for the same.

19. What is the Parent table for incident, change and problem? What does it do?

The Task table is the parent table of Incident, Problem & Change. It makes sure any fields, or configurations defined on the parent table automatically apply to the child tables.


20. What is a record producer?
A catalog item that allows users to create task-based records from the Service Catalog is called as a record producer. For example, creating a change record or a problem record using record producer. Record producers provide an alternative way to create records through Service Catalog

21. What is a glide record?
Glide record is a java class. It is used for performing database operations instead of writing SQL queries.

22. What is import set?
An import set is a tool that imports data from various data sources and, then maps that data into ServiceNow tables using transform map. It acts as a staging table for records imported.

23. What is transform Map?
A transform map transforms the record imported into ServiceNow import set table to the target table. It also determines the relationships between fields displaying in an Import Set table and fields in a target table.

24. What do you mean by foreign record insert?
When an import makes a change to a table that is not the target table for that import, this is when we say foreign record insert occurs. This happens when updating a reference field on a table.

25. Which searching technique is used to search a text or record in ServiceNow?
Zing is the text indexing and search engine that performs all text searches in ServiceNow.

26. What does the Client Transaction Timings plugin do?
It is used to enhance the system logs. It provides more information on the duration of transactions between the client and the server.

27. What is inactivity monitor?
It triggers an event for a task record if the task is inactive for a certain period of time. If the task remains inactive, the monitor repeats at regular intervals.

28. What is domain separation?
Domain separation is a way to separate data into logically-defined domains. For example a client ABC has two businesses and they are using ServiceNow single instance. They do not want users from one business to see data of other business. Here we can configure domain separation to isolate the records from both business.

29. How can you remove ‘Remember me’ check box from login page?
You can set the property – “glide.ui.forgetme” to true to remove the ‘Remember me’ check box from login page.

30. What is HTML Sanitizer?
The HTML Sanitizer is used to automatically clean up HTML markup in HTML fields and removes unwanted code and protect against security concerns such as cross-site scripting attacks. The HTML sanitizer is active for all instances starting with the Eureka release

31. What is the significance of cascade variable checkbox in order guide?
Check box is used to select whether the variables used should cascade, which passes their values to the ordered items. If this check box is cleared, variable information entered in the order guide is not passed on to ordered items.

32. What are Gauges?
A gauge is visible on a ServiceNow homepage and can contain up-to-the-minute information about current status of records that exists on ServiceNow tables. A gauge can be based on a report. It can be put on a homepage or a content page

33. What do you mean by Metrics in ServiceNow?
Metrics, record and measure the workflow of individual records. With metrics, customers can arm their process by providing tangible figures to measure. For example, how long it takes before a ticket is reassigned.

34. What types of searches are available in ServiceNow?
Lists: Find records in a list;

Global text search: Finds records in multiple tables from a single search field.

Knowledge base: Finds knowledge articles.

Navigation filter: Filters the items in the application navigator.

Search screens: Use a form ­like interface to search for records in a table. Administrators can create these custom modules.

35. What is a BSM Map?
BSM Map is a Business Service Management map. It graphically displays the Configuration Items (CI). These items support a business service and indicates the status of those Configuration Items.

36. Which table stores update sets and customization?
Each update set is stored in the Update Set [sys_update_set] table. The customizations that are associated with the update set, are stored in [sys_update_xml] table

37. What happens when you mark a default update set as complete?
If the Default update set is marked Complete, the system creates another update set named Default1 and uses it as the default update set.

38. Can you add Homepages and Content pages to ‘update sets’ in ServiceNow?
Homepages and content pages don’t get added to ‘update sets’ by default. You need to manually add pages to the current ‘update sets’ by unloading them.

39. What is Reference qualifier?
Reference qualifiers restricts the data, that can be selected for a reference field.

40.  What is Performance Analytics in ServiceNow?

Performance Analytics is an additional application in ServiceNow that allows customers to take a snapshot of data at regular intervals and create time series for any Key Performance Indicator (KPI) in the organization.

41. What is the latest servicenow user interface and when was it released?
Vancouver and 

42. What is a sys_id?
It is a unique 32-character GUID that identifies each record created in each table in ServiceNow.

43. What is scorecard?
A scorecard measures the performance of an employee or a business process. It is a graphical representation of progress over time. A scorecard belongs to an indicator. The first step is to define the indicators that you want to measure. You can enhance scorecards by adding targets, breakdowns (scores per group), aggregates, and time series.

44. Can you update a record without updating its system fields(like sys_updated_by, sys_updated_on)?
Yes, you can do it by using a function autoSysFields() in your server side scripting. Whenever you are updating a record set the autoSysFields() to false.

Consider following Example:

var gr = new GlideRecord(‘incident’);
gr.query();
if(gr.next()){
gr.autoSysFields(false);
short_description = “Test from Examsmyntra” ;
gr.update();
}
45. What is Reference qualifier?
Reference qualifier is used to restrict the data that is select able for a reference field.

46. What is Performance Analytics in ServiceNow?
Performance Analytics is an additional application in ServiceNow that allows customers to take a snapshot of data at regular intervals and create time series for any key performance indicator (KPI) in the organisation.

47. How to create a new role?
Navigate to User Administration > Role and click New.

48. Can I have more than one function listening to the same thing?
You can, but there is no guarantee of sequencing. You cannot predict what order your event handlers will run.

49. Which method do you use to get all the active/inactive records from a table?
You can use addActiveQuery() method to get all the active records and addInactiveQuery() to get the all inactive records.

50. What is the difference between next() and _next() method?
next() method is responsible to move to the next record in GlideRecord. _next() provides the same functionality as next(), intended to be used in cases when we query the table having a column name as next.



# CODE SNIPPETS/ CODING Qs

Best Practices of writing Client Script

    - Write it only if required. Use UI policy if possible
    - If GlideAjax call is to be written, write it in Asynchronus glide ajax, as it will not delay the application and the code will execute in the backgroud
    - Use g_scratchpad for server interactions

# Client Script 

## Q1 Compare Two Dates in the incidnet table to be not able to submit if the Issue creation date is more than the issue resolved date.

    function onSubmit() {
    //Type appropriate comment here, and begin script below
    var createDate = g_form.getValue('u_issue_created_on');
    var resolvedDate = g_form.getValue('u_issue_resolved_on');

    if(resolvedDate>createDate){
        g_form.addInfoMessage('Form Submitted');
        return true;
    }
    else {
        g_form.addErrorMessage('Resolved Date must be mmore than Issue date');
        return false;
    }

    }

Ans. It is possible to prevent the form from submission by returing false from the funciton. This will not allow the form  to get submitted.

## Q2 Whenever the form gets loaded, it should autofill the incident created on field

When user change the caller the:
1.Email of that changed caller will be displayed in email field.
2.Configuration field become mandatory.
3.State field value will change to In-Progress
4.Short description will populated with some text.

    function onChange(control, oldValue, newValue, isLoading, isTemplate) {
        if (isLoading || newValue === '') {
            return;
        }
        
        var callerEmail =  g_form.getReference('caller_id').email;
        g_form.setValue("u_caller_email",callerEmail);
        g_form.setMandatory("cmdb_ci",true);
        g_form.setValue("state","2");
        g_form.setValue("short_description","Hello World");

    }

## Q3 How to change behaviour of an OnChange Script to Onload Script

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
      if (isLoading || newValue === '') {
        return;
      }
}

//This is the code for onChange

// Here just remore the isloading parameter and write the code above return that way it will act as onLoad script

## Q4 Which Executes first, client script or UI policy

Client script executes first and then the UI policy 

If there's a conflicting logic between the two then UI policy takes precedence


## Q5 Differences between CS and UI policy

This is how you get the oldValue of the fields 

1.Client script executes on form save/submit/update whereas Ul Policy does not.
2.Client Script have access to field's old Value whereas Policy does not.
3.Ul Policy set field attributes with no scripting whereas Client Script does not.
4.Client script executes on list view whereas Ul policy does not.

	g_form.addInfoMessage(g_form.getValue("short_description",oldValue));


## Q6 Difference between onCellEdit and onChange

In OnCellEdit client script it is not possible to update the glide form API since, the changes are already made to the server. That's why we need to run the server side code to manipulate the data.

## Q7 Write the code to not allow submission of data if resolved date is less than created date in list view

Now since we need to run the server code, in client script. we will need to run the it using the glideAJAX

Client Script

    function onCellEdit(sysIDs, table, oldValues, newValue, callback) {
        // var saveAndClose = true;
        //Type appropriate comment here, and begin script below

        var ga = new GlideAjax('cellEditTest');
        ga.addParam('sysparam_name','validDates');//this is the function which is being called from the SI
        ga.addParam('sysparam_sysIDs',sysIDs);	 //this is the sent to script inc
        ga.addParam('sysparam_newValue',newValue);		//this is the sent to script inc

        ga.getXML(checkDates);

        function checkDates(response){
            var answer = response.responseXML.documentElement.getAttribute("answer");
            if(answer=="Go"){
                callback(false);
            }
            else if(answer=="No Go")
            {
                alert("please check the dates");
                callback(false);
            }
        }
    }


Script Include

    var cellEditTest = Class.create();
    cellEditTest.prototype = Object.extendsObject(AbstractAjaxProcessor, {

        validDates: function(){
        var newDate = this.getParameter('sysparam_newValue');
            var gr = new GlideRecord('incident');
            gr.addQuery('sys_id',this.getParameter('sysparam_sysIDs'));
            gr.query();
            if(gr.next()){
                if (newDate>gr.u_issue_resolved_on){
                    return "No Go";
                }
                else 
                {
                    return "Go";
                }
            } 
        },

        type: 'cellEditTest'
    });







