#include<ros/ros.h>
#include<ros_basic/AddTwoInts.h>


int main(int argv,char **argc){
    ros::init(argv,argc,"client_service");

    if(argv!=3){
        ROS_INFO("enter x and y two know their sum \n");
        return 1;
    }

    ros::NodeHandle n;
    ros::ServiceClient cs;
    cs=n.serviceClient<ros_basic::AddTwoInts>("add_two_ints");

    ros_basic::AddTwoInts srv;
    srv.request.a=atoll(argc[1]);
    srv.request.b=atoll(argc[2]);
    if(cs.call(srv)){
        ROS_INFO("the sum is %ld",srv.response.sum);
    }
    else{
        ROS_INFO("Server is unavailable");
        return 1;
    }

    return 0;
}