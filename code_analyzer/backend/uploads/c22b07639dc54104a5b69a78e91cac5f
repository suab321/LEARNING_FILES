#include<ros/ros.h>
#include<ros_basic/AddTwoInts.h>

bool add(ros_basic::AddTwoInts::Request &req,ros_basic::AddTwoInts::Response &res){
    int a,b;
    res.sum=req.a+req.b;
    ROS_INFO("The sum is %d",(long int)res.sum);
    return true;
}

int main(int argv,char **argc){
    ros::init(argv,argc,"server_service");

    ros::NodeHandle n;
    ros::ServiceServer sub;
    sub=n.advertiseService("add_two_ints",add);

    ros::spin();

    return 0;
}