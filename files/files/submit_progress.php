    <?php
    include('config.php');
    $_POST = json_decode(file_get_contents('php://input'), true);
    if($_POST) {
        $selectedStore = isset($_POST['selectedStore']) ? $_POST['selectedStore'] : '';
        $selectedStatus = isset($_POST['selectedStatus']) ? $_POST['selectedStatus']: '';
        
        $stmt = $conn->query("SELECT * FROM store_progress WHERE store_name = '".$selectedStore."'");
        $progress = $stmt->fetch();
        if( $progress ) {

            if( $progress['collect_info'] == '1' &&  $selectedStatus == 'collect-information' ) {
                if( $progress['submit_approval'] == '2' ) {
                    $statusApprovalCheck = 1;
                } else if ( $progress['submit_approval'] == '1' ) {
                    $statusApprovalCheck = 1;
                }
                if( $progress['approved'] == '2' ) {
                    $statusApprovedCheck = 1;
                } else if ( $progress['approved'] == '1' ) {
                    $statusApprovedCheck = 1;
                }
                $statusCollection = 2;
            } elseif( $progress['collect_info'] == '0' &&  $selectedStatus == 'collect-information' ) {
                if( $progress['submit_approval'] == '2' ) {
                    $statusApprovalCheck = 1;
                } else if ( $progress['submit_approval'] == '1' ) {
                    $statusApprovalCheck = 1;
                }
                if( $progress['approved'] == '2' ) {
                    $statusApprovedCheck = 1;
                } else if ( $progress['approved'] == '1' ) {
                    $statusApprovedCheck = 1;
                }
                $statusCollection = 2;
            } elseif ( $progress['collect_info'] == '2' && $selectedStatus == ''  ) {
                $statusCollection = 0;
            } elseif ( $progress['collect_info'] == '2' && $selectedStatus != 'collect-information'  ) {
                $statusCollection = 1;
            } elseif ( $progress['collect_info'] == '2' && $selectedStatus == 'collect-information'  ) {
                $statusCollection = 2;
            } elseif ( $progress['collect_info'] == '0' && $selectedStatus != 'collect-information' ) {
                $statusCollection = 0;
            } else if ( $progress['collect_info'] == '1' ) {
                $statusCollection = 1;
            } else {
                $statusCollection = 0;
            }

            if( $progress['submit_approval'] == '1' &&  $selectedStatus == 'submit-approval' ) {
                if( $progress['approved'] == '2' ) {
                    $statusApprovedCheck = 1;
                } else if ( $progress['approved'] == '1' ) {
                    $statusApprovedCheck = 1;
                }
                $statusApproval = 2;
            } elseif( $progress['submit_approval'] == '0' &&  $selectedStatus == 'submit-approval' ) {
                if( $progress['approved'] == '2' ) {
                    $statusApprovedCheck = 1;
                } else if ( $progress['approved'] == '1' ) {
                    $statusApprovedCheck = 1;
                }
                $statusApproval = 2;
            } elseif ( $progress['submit_approval'] == '2' && $selectedStatus == ''  ) {
                $statusApproval = 0;
            } elseif ( $progress['submit_approval'] == '2' && $selectedStatus != 'submit-approval'  ) {
                if( !$statusApprovalCheck ) {
                    $statusApproval = 1;
                } else {
                    $statusApproval = 0;
                }
            } elseif ( $progress['submit_approval'] == '2' && $selectedStatus == 'submit-approval'  ) {
                $statusApproval = 2;
            } elseif ( $progress['submit_approval'] == '0' && $selectedStatus != 'submit-approval' ) {
                $statusApproval = 0;
            } else if ( $progress['submit_approval'] == '1' ) {
                $statusApproval = 1;
            } else {
                $statusApproval = 0;
            }

            if( $progress['approved'] == '1' &&  $selectedStatus == 'approved' ) {
                $statusApproved = 2;
            } elseif( $progress['approved'] == '0' &&  $selectedStatus == 'approved' ) {
                $statusApproved = 2;
            } elseif ( $progress['approved'] == '2' && $selectedStatus == ''  ) {
                $statusApproved = 0;
            } elseif ( $progress['approved'] == '2' && $selectedStatus != 'approved'  ) {
                if( !$statusApprovedCheck ) {
                    $statusApproved = 1;
                }else {
                    $statusApproved = 0;
                }
            } elseif ( $progress['approved'] == '2' && $selectedStatus == 'approved'  ) {
                $statusApproved = 2;
            } elseif ( $progress['approved'] == '0' && $selectedStatus != 'approved' ) {
                $statusApproved = 0;
            } else if ( $progress['approved'] == '1' ) {
                $statusApproved = 1;
            } else {
                $statusApproved = 0;
            }

            $data = [
                'collect_info' => $statusCollection,
                'submit_approval' => $statusApproval,
                'approved' => $statusApproved,
                'store_id' => $progress['store_id'],
            ];
            $sql = "UPDATE store_progress SET collect_info=:collect_info, submit_approval=:submit_approval, approved=:approved WHERE store_id=:store_id";
            $stmt= $conn->prepare($sql);
            $stmt->execute($data);

            $status = array(
                'status'   =>   1,
                'message'  =>   'Successfully saved'
            );
        } else {
            $status = array(
                'status'   =>   0,
                'message'  =>   'Error in saving'
            );
        }  
        echo json_encode($data);
    }
    ?>