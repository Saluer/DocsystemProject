package alexeydavydov.docsystem.domain.assignment;

import alexeydavydov.docsystem.domain.Employee;
import alexeydavydov.docsystem.domain.assignment.states.PreparingState;
import alexeydavydov.docsystem.domain.assignment.states.State;
import alexeydavydov.docsystem.requests.CreateAssignmentRequest;
import alexeydavydov.docsystem.requests.UpdateAssignmentRequest;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;


@Entity
@Table
public class Assignment {
    @Transient
    State state;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "serial")
    private int id;
    @Column
    private String subject;
    @Column
    private Date deadline;
    @Column
    private boolean controlSign;
    @Column
    private boolean operateSign;
    @Column
    private String content;
    @ManyToMany
    private List<Employee> operators;
    @ManyToOne
    private Employee author;

    public Assignment() {
        initState();
    }

    public Assignment(CreateAssignmentRequest request, Employee author) {
        initState();
        this.subject = request.getSubject();
        this.deadline = request.getDeadline();
        this.controlSign = request.isControlSign();
        this.operateSign = request.isOperateSign();
        this.content = request.getContent();
        this.author = author;
    }

    public Assignment(UpdateAssignmentRequest request, int id, Employee author) {
        initState();
        this.id = id;
        this.subject = request.getSubject();
        this.deadline = request.getDeadline();
        this.controlSign = request.isControlSign();
        this.operateSign = request.isOperateSign();
        this.content = request.getContent();
        this.author = author;
    }

    void initState() {
        this.state = new PreparingState(this);
    }

    public void changeState(State state){
        this.state = state;
    }

    public Employee getAuthor() {
        return author;
    }

    public void setAuthor(Employee author) {
        this.author = author;
    }

    public List<Employee> getOperators() {
        return operators;
    }

    public void setOperators(List<Employee> operators) {
        this.operators = operators;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public Date getDeadline() {
        return deadline;
    }

    public void setDeadline(Date deadline) {
        this.deadline = deadline;
    }

    public boolean isControlSign() {
        return controlSign;
    }

    public void setControlSign(boolean controlSign) {
        this.controlSign = controlSign;
    }

    public boolean isOperateSign() {
        return operateSign;
    }

    public void setOperateSign(boolean operateSign) {
        this.operateSign = operateSign;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }


}
